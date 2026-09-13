import { rules2025 } from './rates/2025.js';

const roundMoney = (value) => Math.round((value + Number.EPSILON) * 100) / 100;

export function calculatePrivateEmployeePayroll(monthlyBasicSalary, rules = rules2025) {
  const grossPay = Number(monthlyBasicSalary);
  if (!Number.isFinite(grossPay) || grossPay < 0) throw new Error('Enter a monthly basic salary of zero or more.');

  const { sss, philHealth, pagIbig, incomeTax } = rules;
  const salaryCredit = grossPay < sss.firstStepStart
    ? sss.minimumSalaryCredit
    : Math.min(sss.maximumSalaryCredit, sss.minimumSalaryCredit + sss.step + Math.floor((grossPay - sss.firstStepStart) / sss.step) * sss.step);
  const sssEmployee = roundMoney(salaryCredit * sss.employeeRate);
  const philHealthBase = Math.min(Math.max(grossPay, philHealth.salaryFloor), philHealth.salaryCeiling);
  const philHealthEmployee = roundMoney(philHealthBase * philHealth.rate * philHealth.employeeShare);
  const pagIbigRate = grossPay <= pagIbig.lowerRateCeiling ? pagIbig.lowerRate : pagIbig.rate;
  const pagIbigEmployee = roundMoney(Math.min(grossPay, pagIbig.contributionBaseCeiling) * pagIbigRate);
  const taxableMonthlyPay = Math.max(0, grossPay - sssEmployee - philHealthEmployee - pagIbigEmployee);
  const taxableAnnualPay = taxableMonthlyPay * 12;
  const bracketIndex = incomeTax.findIndex(({ ceiling }) => taxableAnnualPay <= ceiling);
  const bracket = incomeTax[bracketIndex];
  const lowerBound = incomeTax[bracketIndex - 1]?.ceiling ?? 0;
  const incomeTaxWithheld = roundMoney((bracket.baseTax + (taxableAnnualPay - lowerBound) * bracket.rate) / 12);
  const totalDeductions = roundMoney(sssEmployee + philHealthEmployee + pagIbigEmployee + incomeTaxWithheld);

  return { grossPay: roundMoney(grossPay), taxableMonthlyPay: roundMoney(taxableMonthlyPay), sss: sssEmployee, philHealth: philHealthEmployee, pagIbig: pagIbigEmployee, incomeTax: incomeTaxWithheld, totalDeductions, netPay: roundMoney(grossPay - totalDeductions), rulesEffectiveFrom: rules.effectiveFrom };
}
