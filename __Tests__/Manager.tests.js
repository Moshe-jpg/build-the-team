const Manager = require('../lib/Manager.js')

describe('My employee', () => {
    test("Can get role manager via getRole()", () => {
        const testValue = "Manager";
        const e = new Manager("Manager", 1, testValue);
        expect(e.getRole()).toBe(testValue);
      });
});