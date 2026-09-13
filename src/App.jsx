import { useMemo, useState } from 'react';
import { calculatePrivateEmployeePayroll } from './calculator.js';

const currency = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' });
const deductions = [
  ['sss', 'SSS', 'Social Security System'],
  ['philHealth', 'PhilHealth', 'Health insurance'],
  ['pagIbig', 'Pag-IBIG', 'Membership savings'],
  ['incomeTax', 'Withholding tax', 'BIR income tax'],
];

function App() {
  const [salary, setSalary] = useState('');
  const [submittedSalary, setSubmittedSalary] = useState(null);
  const [error, setError] = useState('');
  const result = useMemo(() => submittedSalary === null ? null : calculatePrivateEmployeePayroll(submittedSalary), [submittedSalary]);

  function handleSubmit(event) {
    event.preventDefault();
    try {
      if (salary.trim() === '') throw new Error('Enter your monthly basic salary to calculate take-home pay.');
      const amount = Number(salary);
      calculatePrivateEmployeePayroll(amount);
      setSubmittedSalary(amount);
      setError('');
    } catch (calculationError) { setError(calculationError.message); }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-900 sm:px-6 lg:py-16">
      <section className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-50 shadow-2xl shadow-black/30">
        <header className="bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 px-6 py-10 text-white sm:px-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Private employee · latest verified statutory rules</p>
          <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">See where your salary goes.</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-blue-100">A clear estimate of monthly mandatory deductions and take-home pay in the Philippines.</p>
        </header>

        <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <form onSubmit={handleSubmit} className="self-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <label htmlFor="monthly-salary" className="block text-sm font-bold text-slate-800">Monthly basic salary</label>
            <p className="mt-1 text-sm text-slate-500">Before deductions. Allowances, bonuses, and overtime are not included in this estimate.</p>
            <div className="mt-5 flex rounded-xl border border-slate-300 bg-slate-50 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
              <span className="flex items-center border-r border-slate-200 px-4 font-semibold text-slate-500">₱</span>
              <input id="monthly-salary" className="w-full bg-transparent px-4 py-4 text-xl font-semibold outline-none" type="number" min="0" step="0.01" inputMode="decimal" value={salary} onChange={(event) => setSalary(event.target.value)} placeholder="e.g. 50,000" />
            </div>
            {error && <p role="alert" className="mt-3 text-sm font-medium text-rose-600">{error}</p>}
            <button className="mt-5 w-full rounded-xl bg-slate-900 px-5 py-4 font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200">Calculate take-home pay</button>
            <p className="mt-5 text-xs leading-5 text-slate-500">Estimate for a private-sector employee. Actual payroll may differ based on pay period, taxable benefits, loans, and employer-specific adjustments.</p>
          </form>

          <section aria-live="polite" className="rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
            {result ? <>
              <div className="flex items-start justify-between gap-4 border-b border-white/15 pb-6">
                <div><p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Estimated monthly take-home</p><p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{currency.format(result.netPay)}</p></div>
                <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-bold text-cyan-200">2025 schedule</span>
              </div>
              <dl className="mt-5 space-y-4">
                <div className="flex justify-between text-sm text-slate-300"><dt>Gross monthly salary</dt><dd className="font-semibold text-white">{currency.format(result.grossPay)}</dd></div>
                {deductions.map(([key, title, detail]) => <div key={key} className="flex items-center justify-between gap-4"><dt><span className="block font-semibold text-white">{title}</span><span className="text-xs text-slate-400">{detail}</span></dt><dd className="font-semibold text-rose-200">− {currency.format(result[key])}</dd></div>)}
                <div className="flex justify-between border-t border-white/15 pt-5"><dt className="font-bold">Total deductions</dt><dd className="font-bold text-rose-200">− {currency.format(result.totalDeductions)}</dd></div>
              </dl>
              <p className="mt-6 rounded-lg bg-white/5 p-3 text-xs leading-5 text-slate-300">Income tax is calculated after employee SSS, PhilHealth, and Pag-IBIG contributions. Uses the latest verified schedule, effective {result.rulesEffectiveFrom}; confirm agency updates before processing payroll.</p>
            </> : <div className="flex min-h-[360px] flex-col justify-center"><p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Your estimate</p><h2 className="mt-3 text-3xl font-bold">Enter a salary to begin.</h2><p className="mt-3 max-w-sm leading-7 text-slate-300">You’ll get a simple deduction breakdown and an estimated monthly net pay.</p></div>}
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;
