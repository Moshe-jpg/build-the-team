const Intern = require('../lib/Intern.js')

describe('My employee', () => {
    test("Can get role intern via getRole()", () => {
        const testValue = "Intern";
        const e = new Intern("Intern", 1, testValue);
        expect(e.getRole()).toBe(testValue);
      });
});