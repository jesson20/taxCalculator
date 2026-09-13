import assert from 'node:assert/strict';
import test from 'node:test';
import { calculatePrivateEmployeePayroll } from './calculator.js';

test('uses 2025 statutory floors for a low-income employee', () => {
  const result = calculatePrivateEmployeePayroll(10000);
  assert.equal(result.sss, 500); assert.equal(result.philHealth, 250); assert.equal(result.pagIbig, 100); assert.equal(result.incomeTax, 0); assert.equal(result.netPay, 9150);
});
test('caps 2025 SSS, PhilHealth, and Pag-IBIG employee contributions', () => {
  const result = calculatePrivateEmployeePayroll(100000);
  assert.equal(result.sss, 1750); assert.equal(result.philHealth, 2500); assert.equal(result.pagIbig, 100);
});
test('calculates withholding after mandatory employee contributions', () => {
  const result = calculatePrivateEmployeePayroll(50000);
  assert.equal(result.taxableMonthlyPay, 46900); assert.equal(result.incomeTax, 4588.33);
});
