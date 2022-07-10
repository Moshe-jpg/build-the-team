const Engineer = require('../lib/Engineer.js')

describe('My employee', () => {
    test("Can get role engineer via getRole()", () => {
        const testValue = "Engineer";
        const e = new Engineer("Engineer", 1, testValue);
        expect(e.getRole()).toBe(testValue);
      });
});