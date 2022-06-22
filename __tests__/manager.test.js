const {Manager} = require("../lib/manager");

test("can get office number via const", () => {
    const testValue = 100;
    const e = new Manager("Varun", 1, "eamil@email.com", testValue);
    expect(e.officeNumber).toBe(testValue);
})

test("getRole() should be manager", () => {
    const testValue = "Manager";
    const e = new Manager("Varun", 1, "email@email.com", 100);
    expect(e.getRole()).toBe(testValue);
})

test("can get officeNumber()", () => {
    const testValue = 100;
    const e = new Manager("Varun", 1, "email@email.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
})