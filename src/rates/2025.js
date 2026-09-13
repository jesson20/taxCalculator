// Private-sector employee rules effective 1 January 2025.
// Sources are kept with the rules so annual updates are a small, auditable change.
export const rules2025 = {
  effectiveFrom: '2025-01-01',
  sources: {
    sss: 'https://www.sss.gov.ph/wp-content/uploads/2024/12/2025-SSS-Contribution-Table-rev.pdf',
    philHealth: 'https://www.philhealth.gov.ph/advisories/2025/PA2025-0002.pdf',
    bir: 'https://bir-cdn.bir.gov.ph/local/pdf/Digest%20RR%2011-2018.pdf',
  },
  sss: { minimumSalaryCredit: 5000, maximumSalaryCredit: 35000, firstStepStart: 5250, step: 500, employeeRate: 0.05 },
  philHealth: { rate: 0.05, employeeShare: 0.5, salaryFloor: 10000, salaryCeiling: 100000 },
  pagIbig: { lowerRate: 0.01, rate: 0.02, lowerRateCeiling: 1500, contributionBaseCeiling: 5000 },
  incomeTax: [
    { ceiling: 250000, baseTax: 0, rate: 0 },
    { ceiling: 400000, baseTax: 0, rate: 0.15 },
    { ceiling: 800000, baseTax: 22500, rate: 0.2 },
    { ceiling: 2000000, baseTax: 102500, rate: 0.25 },
    { ceiling: 8000000, baseTax: 402500, rate: 0.3 },
    { ceiling: Infinity, baseTax: 2202500, rate: 0.35 },
  ],
};
