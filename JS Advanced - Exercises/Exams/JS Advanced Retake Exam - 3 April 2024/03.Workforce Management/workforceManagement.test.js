import { expect } from 'chai';
import { describe, it } from 'mocha';
import { workforceManagement } from './workforceManagement.js';

describe('Workforce Management tests', function () {
      describe('RecruitStaff tests', function() {
        it('Should throw an error if the role is not Developer', () => {
            expect(() => workforceManagement.recruitStaff("a", "b", 1)).to.throw("We are not currently hiring for this role.");
        });
        it('Should return a success message with valid input', () => {
          expect(workforceManagement.recruitStaff('a', 'Developer', 4)).to.equal('a has been successfully recruited for the role of Developer.');
          expect(workforceManagement.recruitStaff('a', 'Developer', 5)).to.equal('a has been successfully recruited for the role of Developer.');
          expect(workforceManagement.recruitStaff('a', 'Developer', 3)).to.equal('a is not suitable for this role.');
        })
      });
      describe('ComputeWages tests', function() {
        it('Should throw an error if hoursWorked is not a number or negative number', () => {
            expect(() => workforceManagement.computeWages("a")).to.throw("Invalid hours");
            expect(() => workforceManagement.computeWages(-1)).to.throw("Invalid hours");
        });
        it('Should return the correct payment for valid input', () => {
          expect(workforceManagement.computeWages(0)).to.equal(0);
          expect(workforceManagement.computeWages(1)).to.equal(18);
          expect(workforceManagement.computeWages(160)).to.equal(2880);
          expect(workforceManagement.computeWages(161)).to.equal(4398);
        })
      });
      describe("DismissEmployee tests", function() {
        it('Should throw an error if workforce is not an array or employeeIndex is invalid', () => {
            expect(() => workforceManagement.dismissEmployee("a", 0)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee([], -1)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee([], 0)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(['a'], 1)).to.throw("Invalid input");
        });
        it('Should return the updated staff list after dismissal', () => {
          expect(workforceManagement.dismissEmployee(["a", "b", "c"], 0)).to.equal("b, c");
          expect(workforceManagement.dismissEmployee(["a", "b", "c"], 1)).to.equal("a, c");
          expect(workforceManagement.dismissEmployee(["a", "b", "c"], 2)).to.equal("a, b");
          expect(workforceManagement.dismissEmployee(["a"], 0)).to.equal("");
        })
      })
})