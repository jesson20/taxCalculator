const inputBox = document.getElementById("input-box");
let excess, excessTax, incomeTax;
let sssValue = 0, philhealthValue = 0, pagibigValue= 0; 

// Get references to the dropdown and result elements
const incomeTypeDropdown = document.getElementById("monthlyOrAnnual");

// Add an event listener to the dropdown to detect changes


function calculateTax() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let inputElement = document.getElementById("input-box");

        let monthlyIncome = inputElement.value;

        let annualIncome = monthlyIncome * 12;

        let incomeTax = 0;

        if (annualIncome > 8000000) {
            excess = annualIncome - 8000000;
            excessTax = excess * 0.35;
            incomeTax = (2205000 + excessTax)/12;
            sssValue = 1350;
            philhealthValue = monthlyIncome*0.045;
            if(monthlyIncome>89999.99)
            philhealthValue = 4050;
            pagibigValue = monthlyIncome *0.02;

        } else if (annualIncome > 2000000) {
            excess = annualIncome - 2000000;
            excessTax = excess * 0.30;
            incomeTax = (402500 + excessTax)/12;
            sssValue = 1350;
            philhealthValue = monthlyIncome*0.045;
            pagibigValue = monthlyIncome *0.02;

        } else if (annualIncome > 800000) {
            excess = annualIncome - 800000;
            excessTax = excess * 0.25;
            incomeTax = (102500 + excessTax)/12;
            sssValue = 1350;
            philhealthValue = monthlyIncome*0.045;
            pagibigValue = monthlyIncome *0.02;
        } else if (annualIncome > 400000) {
            excess = annualIncome - 400000;
            excessTax = excess * 0.20;
            incomeTax = (22500 + excessTax)/12;
            sssValue = 1350;
            philhealthValue = monthlyIncome*0.045;
            pagibigValue = monthlyIncome *0.02;
        } else if (annualIncome > 250000) {
            excess = annualIncome - 250000;
            excessTax = excess * 0.15;
            incomeTax = excessTax/12;
            if(monthlyIncome > 29750)
                 sssValue = 1350;
            else if(monthlyIncome>29250)
                sssValue = 1327.50;
            else if(monthlyIncome>28750)
                sssValue = 1305;
            else if(monthlyIncome>28250)
                sssValue = 1282.50;
            else if(monthlyIncome>27750)
                sssValue = 1260;
            else if(monthlyIncome>27250)
                sssValue = 1237.50;
            else if(monthlyIncome>26750)
                sssValue = 1215;
            else if(monthlyIncome>26250)
                sssValue = 1192.50;
            else if(monthlyIncome>25750)
                sssValue = 1170;
            else if(monthlyIncome>25250)
                sssValue = 1147.50;
            else if(monthlyIncome>24750)
                sssValue = 1125;
            else if(monthlyIncome>24250)
                sssValue = 1102.50;
            else if(monthlyIncome>23750)
                sssValue = 1080;
            else if(monthlyIncome>23250)
                sssValue = 1057.50;
            else if(monthlyIncome>22750)
                sssValue = 1035;
            else if(monthlyIncome>22250)
                sssValue = 1012.50;
            else if(monthlyIncome>21750)
                sssValue = 990;
            else if(monthlyIncome>21250)
                sssValue = 967.50;
            
            philhealthValue = monthlyIncome *0.045;
            pagibigValue = monthlyIncome *0.02;
        } else {
            incomeTax = 0;

            if(monthlyIncome>20750)
                sssValue = 945;
            else if(monthlyIncome>20250)
                sssValue = 922.50;
            else if(monthlyIncome>19750)
                sssValue = 900;
            else if(monthlyIncome>19250)
                sssValue = 877.50;
            else if(monthlyIncome>18750)
                sssValue = 855;
            else if(monthlyIncome>18250)
                sssValue = 832.50;
            else if(monthlyIncome>17750)
                sssValue = 810;
            else if(monthlyIncome>17250)
                sssValue = 787.50;
            else if(monthlyIncome>16750)
                sssValue = 765;
            else if(monthlyIncome>16250)
                sssValue = 742.50;
            else if(monthlyIncome>15750)
                sssValue = 720;
            else if(monthlyIncome>15250)
                sssValue = 697.50;
            else if(monthlyIncome>14750)
                sssValue = 675;
            else if(monthlyIncome>14250)
                sssValue = 652.50;
            else if(monthlyIncome>13750)
                sssValue = 630;
            else if(monthlyIncome>13250)
                sssValue = 607.50;
            else if(monthlyIncome>12750)
                sssValue = 585;
            else if(monthlyIncome>12250)
                sssValue = 562.50;
            else if(monthlyIncome>11750)
                sssValue = 540;
            else if(monthlyIncome>11250)
                sssValue = 517.50;
            else if(monthlyIncome>10750)
                sssValue = 495;
            else if(monthlyIncome>10250)
                sssValue = 472.50;
            else if(monthlyIncome>9750)
                sssValue = 450;
            else if(monthlyIncome>9250)
                sssValue = 427.50;
            else if(monthlyIncome>8750)
                sssValue = 405;
            else if(monthlyIncome>8250)
                sssValue = 382.50;
            else if(monthlyIncome>7750)
                sssValue = 360;
            else if(monthlyIncome>7250)
                sssValue = 337.50;
            else if(monthlyIncome>6750)
                sssValue = 315;
            else if(monthlyIncome>6250)
                sssValue = 292.50;
            else if(monthlyIncome>5750)
                sssValue = 270;
            else if(monthlyIncome>5250)
                sssValue = 247.50;
            else if(monthlyIncome>5000)
                sssValue = 225;
            else
                sssValue = 0

            philhealthValue = 400;
            if(monthlyIncome>10000)
                philhealthValue = monthlyIncome *0.045;

            pagibigValue = monthlyIncome *0.02;

            if(monthlyIncome<1500)
                pagibigValue = monthlyIncome *.01;


        }
        
        let taxElement = document.getElementById("itax");
        taxElement.value = incomeTax.toFixed(2);

        let sssElement = document.getElementById("sss");
        let philhealthElement = document.getElementById("philhealth");
        let pagibigElement = document.getElementById("pagibig");
        let tdeductionElement = document.getElementById("tdeduction");
        let netpayElement = document.getElementById("netpay");

        totalDeductions = sssValue + philhealthValue + pagibigValue + incomeTax; 
        netPay = monthlyIncome - (totalDeductions/12); 

        incomeTypeDropdown.addEventListener("change", function () {
            const selectedOption = incomeTypeDropdown.value;
            
                // Check the selected option and update the result
                if (selectedOption === "monthly") {
                    sssValue = 1000; 
                    philhealthValue = 500; 
                    pagibigValue = 200; 
                    totalDeductions = sssValue + philhealthValue + pagibigValue + incomeTax; 
                    netPay = monthlyIncome - (totalDeductions/12); 

                    
                } 
                else if (selectedOption === "annual") {
                    sssValue = 1000*12; 
                    philhealthValue = 500*12; 
                    pagibigValue = 200*12; 
                    totalDeductions = (sssValue + philhealthValue + pagibigValue + incomeTax)*12; 
                    netPay = totalIncome - totalDeductions; 

                }
              
            });

            sssElement.value = sssValue.toFixed(2);
            philhealthElement.value = philhealthValue.toFixed(2);
            pagibigElement.value = pagibigValue.toFixed(2);
            tdeductionElement.value = totalDeductions.toFixed(2);
            netpayElement.value = netPay.toFixed(2);
    }
}



