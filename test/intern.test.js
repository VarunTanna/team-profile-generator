const Intern = require("../lib/intern");

test("can set school", () => {
    const testValue = "UNCC";
    const e = new Intern("Varun", 1, "email@email.com", testValue);
    expect(e.school).tobe(testValue);
})

test("getRole() should be intern", () => {
    const testValue = "Intern";
    const e = new Intern("Varun", 1, "email@email.com", "UNCC");
    expect(e.getRole()).tobe(testValue);
})

test("can getSchool()", () => {
    const testValue = "UNCC";
    const e = new Intern("Varun", 1, "email@eamil.com", testValue);
    expect(e.getSchool()).tobe(testValue)
})