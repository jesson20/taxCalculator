import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [incomeType, setIncomeType] = useState('monthly');
  const [results, setResults] = useState({
    incomeTax: 0,
    sssValue: 0,
    philhealthValue: 0,
    pagibigValue: 100,
    totalDeductions: 0,
    netPay: 0,
  });

  const handleIncomeChange = (event) => {
    setMonthlyIncome(event.target.value);
  };

  const handleIncomeTypeChange = (event) => {
    setIncomeType(event.target.value);
    calculateTax();
  };

  const calculateTax = () => {
    if (monthlyIncome === '') {
      alert("You must write something!");
      return;
    }

    let sssValue = 0, philhealthValue = 0, pagibigValue = 100;
    let annualIncome = monthlyIncome * 12;
    let incomeTax = 0;
    let excess, excessTax;

    if (annualIncome > 8000000) {
      excess = annualIncome - 8000000;
      excessTax = excess * 0.35;
      incomeTax = (2205000 + excessTax) / 12;
      sssValue = 1350;
      philhealthValue = (monthlyIncome * 0.045) / 2;
      if (monthlyIncome > 89999.99) philhealthValue = 4050;
    } else if (annualIncome > 2000000) {
      excess = annualIncome - 2000000;
      excessTax = excess * 0.30;
      incomeTax = (402500 + excessTax) / 12;
      sssValue = 1350;
      philhealthValue = (monthlyIncome * 0.045) / 2;
    } else if (annualIncome > 800000) {
      excess = annualIncome - 800000;
      excessTax = excess * 0.25;
      incomeTax = (102500 + excessTax) / 12;
      sssValue = 1350;
      philhealthValue = (monthlyIncome * 0.045) / 2;
    } else if (annualIncome > 400000) {
      excess = annualIncome - 400000;
      excessTax = excess * 0.20;
      incomeTax = (22500 + excessTax) / 12;
      sssValue = 1350;
      philhealthValue = (monthlyIncome * 0.045) / 2;
    } else if (annualIncome > 250000) {
      excess = annualIncome - 250000;
      excessTax = excess * 0.15;
      incomeTax = excessTax / 12;
      sssValue = calculateSSS(monthlyIncome);
      philhealthValue = (monthlyIncome * 0.045) / 2;
    } else {
      incomeTax = 0;
      sssValue = calculateSSS(monthlyIncome);
      philhealthValue = monthlyIncome >= 10000 ? (monthlyIncome * 0.045) / 2 : 400;
    }

    let totalDeductions = sssValue + philhealthValue + pagibigValue + incomeTax;
    let netPay = monthlyIncome - totalDeductions;

    if (incomeType === "annual") {
      sssValue *= 12;
      philhealthValue *= 12;
      pagibigValue *= 12;
      totalDeductions *= 12;
      netPay *= 12;
    }

    setResults({
      incomeTax: incomeTax.toFixed(2),
      sssValue: sssValue.toFixed(2),
      philhealthValue: philhealthValue.toFixed(2),
      pagibigValue: pagibigValue.toFixed(2),
      totalDeductions: totalDeductions.toFixed(2),
      netPay: netPay.toFixed(2),
    });
  };

  const calculateSSS = (monthlyIncome) => {
    if (monthlyIncome >= 29750) return 1350;
    if (monthlyIncome >= 29250) return 1327.50;
    if (monthlyIncome >= 28750) return 1305;
    if (monthlyIncome >= 28250) return 1282.50;
    if (monthlyIncome >= 27750) return 1260;
    if (monthlyIncome >= 27250) return 1237.50;
    if (monthlyIncome >= 26750) return 1215;
    if (monthlyIncome >= 26250) return 1192.50;
    if (monthlyIncome >= 25750) return 1170;
    if (monthlyIncome >= 25250) return 1147.50;
    if (monthlyIncome >= 24750) return 1125;
    if (monthlyIncome >= 24250) return 1102.50;
    if (monthlyIncome >= 23750) return 1080;
    if (monthlyIncome >= 23250) return 1057.50;
    if (monthlyIncome >= 22750) return 1035;
    if (monthlyIncome >= 22250) return 1012.50;
    if (monthlyIncome >= 21750) return 990;
    if (monthlyIncome >= 21250) return 967.50;
    if (monthlyIncome >= 20750) return 945;
    if (monthlyIncome >= 20250) return 922.50;
    if (monthlyIncome >= 19750) return 900;
    if (monthlyIncome >= 19250) return 877.50;
    if (monthlyIncome >= 18750) return 855;
    if (monthlyIncome >= 18250) return 832.50;
    if (monthlyIncome >= 17750) return 810;
    if (monthlyIncome >= 17250) return 787.50;
    if (monthlyIncome >= 16750) return 765;
    if (monthlyIncome >= 16250) return 742.50;
    if (monthlyIncome >= 15750) return 720;
    if (monthlyIncome >= 15250) return 697.50;
    if (monthlyIncome >= 14750) return 675;
    if (monthlyIncome >= 14250) return 652.50;
    if (monthlyIncome >= 13750) return 630;
    if (monthlyIncome >= 13250) return 607.50;
    if (monthlyIncome >= 12750) return 585;
    if (monthlyIncome >= 12250) return 562.50;
    if (monthlyIncome >= 11750) return 540;
    if (monthlyIncome >= 11250) return 517.50;
    if (monthlyIncome >= 10750) return 495;
    if (monthlyIncome >= 10250) return 472.50;
    if (monthlyIncome >= 9750) return 450;
    if (monthlyIncome >= 9250) return 427.50;
    if (monthlyIncome >= 8750) return 405;
    if (monthlyIncome >= 8250) return 382.50;
    if (monthlyIncome >= 7750) return 360;
    if (monthlyIncome >= 7250) return 337.50;
    if (monthlyIncome >= 6750) return 315;
    if (monthlyIncome >= 6250) return 292.50;
    if (monthlyIncome >= 5750) return 270;
    if (monthlyIncome >= 5250) return 247.50;
    if (monthlyIncome >= 5000) return 225;
    return 0;
  };

  return (
    <div>
      <div className="container">
      <h2 className="title">Philippine Tax Calculator</h2>
        <div className="taxApp">
         
        
          <div className="row">
            <input
              type="number"
              id="input-box"
              value={monthlyIncome}
              onChange={handleIncomeChange}
              placeholder="Enter monthly income"
            />
         
            <button onClick={calculateTax}>Calculate</button>
          </div>
      <div>
        <h2 className='resultTitle'>Computation Result</h2>
          <select
            id="monthlyOrAnnual"
            value={incomeType}
            onChange={handleIncomeTypeChange}
          >
            <option value="monthly">Monthly</option>
            <option value="annual">Annual</option>
          </select>
          <br/>

        
          <p>Income Tax: <input id="itax" value={results.incomeTax} readOnly /></p>
          <p>SSS: <input id="sss" value={results.sssValue} readOnly /></p>
          <p>PhilHealth: <input id="philhealth" value={results.philhealthValue} readOnly /></p>
          <p>Pag-IBIG: <input id="pagibig" value={results.pagibigValue} readOnly /></p>
          <p>Total Deductions: <input id="tdeduction" value={results.totalDeductions} readOnly /></p>
          <div className="final">
          <p>Net Pay: <input id="netpay" value={results.netPay} readOnly /></p>
        </div>
        </div>
</div>
</div>
</div>
);
}
export default App;