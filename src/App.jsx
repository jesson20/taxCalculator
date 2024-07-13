import React, { useState } from 'react';

function App() {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [incomeType, setIncomeType] = useState('monthly');
  const [results, setResults] = useState({
    incomeTax: 0,
    sssValue: 0,
    philhealthValue: 0,
    pagibigValue: 0,
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
    <div className="m-0 p-0 font-serif h-full bg-fuchsia-400" >
      <div className="p-1 lg:mx-96">
      <h2 className="text-black text-bold text-lg my-5 lg:mx-2 text-center justify-center lg:text-4xl lg:p-5 lg:text-start">Philippine Tax Calculator</h2>
        <div className="bg-white mx-1 lg:mx-44 text-center  justify-center">
         
        
          <div className="justify-center flex text-center items-center bg-white border-fuchsia-800 border">
            <input
              className='flex border-none outline-none bg-transparent p-5 text-center text-2xl lg:my-3 lg:text-4xl'
              type="number"
              id="input-box"
              value={monthlyIncome}
              onChange={handleIncomeChange}
              placeholder="Enter Monthly Income"
            />
         
          </div>

          <div className='border-x-fuchsia-800 border'>
          <div className='m-4 items-center text-center'>
          <button className='items-center text-center border-none outline-none py-2 px-4 bg-fuchsia-800 text-sm cursor-pointer rounded-3xl text-white lg:text-base' 
          onClick={calculateTax}><a href="#netPay">Calculate</a></button>
          </div>
      <div className='mt-10 lg:mt-14'>
        <h2 className='text-base lg:text-3xl'>Computation Result</h2>
          <select
            className='text-xs lg:text-base bg-fuchsia-800 border-none text-white'
            id="monthlyOrAnnual"
            value={incomeType}
            onChange={handleIncomeTypeChange}
          >
            <option value="monthly">Monthly</option>
            <option value="annual">Annual</option>
          </select>
          <br/>
          </div>

          <div className='mt-4 border-y border-fuchsia-800'>
            <p className='text-start text-xs ml-1 lg:text-xl'>Income Tax: </p> 
            <input  className='flex-1 border-none outline-none bg-transparent pb-2 text-center justify-center lg:text-2xl'
            id="itax" value={results.incomeTax} readOnly />
            </div>

            <div className='border-b border-fuchsia-800'>
            <p className='text-start text-xs ml-1 lg:text-xl' >SSS: </p>
              <input  className='flex-1 border-none outline-none bg-transparent pb-2 text-center justify-center lg:text-2xl'
            id="sss" value={results.sssValue} readOnly />
            </div>

            <div className='border-b border-fuchsia-800'>
            <p className='text-start text-xs ml-1 lg:text-xl'>PhilHealth: </p> 
            <input  className='flex-1 border-none outline-none bg-transparent pb-2 text-center justify-center lg:text-2xl'
            id="philhealth" value={results.philhealthValue} readOnly />
            </div>
            
            <div className='border-b border-fuchsia-800'>
            <p className='text-start text-xs ml-1 lg:text-xl' >Pag-IBIG: </p>
            <input  className='flex-1 border-none outline-none bg-transparent pb-2 text-center justify-center lg:text-2xl'
            id="pagibig" value={results.pagibigValue} readOnly />
            </div>

            <div className='border-b border-fuchsia-800'>
            <p className='text-start text-xs ml-1 lg:text-xl'>Total Deductions: </p>
            <input  className='flex-1 border-none outline-none bg-transparent pb-2 text-center justify-center lg:text-2xl'
            id="tdeduction" value={results.totalDeductions} readOnly />
            </div>

          </div>
          
          <div className=' bg-fuchsia-400 lg:pb-16' id="netPay">
          <p className='text-start ml-1 lg:text-2xl'>Net Pay: </p>
            <input className="text-black items-center justify-between mb-6 text-bold text-3xl text-center bg-fuchsia-400 py-3 lg:text-5xl"
             id="netpay" value={results.netPay} readOnly />
        </div>
</div>
</div>
</div>
);
};


export default App;