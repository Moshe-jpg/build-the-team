const Employee = require('../lib/Employee.js')

describe('My employee', () => {
    test("Can get role Employee via getRole()", () => {
        const testValue = "Employee";
        const e = new Employee("Employee", 1, testValue);
        expect(e.getRole()).toBe(testValue);
      });
});