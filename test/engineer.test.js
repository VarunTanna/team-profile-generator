const Engineer = require("../lib/engineer");

//get github user name via git gethub method
test("can set Github via constructor", () => {
    const testValue = "GitHubUsername";
    const e = new Engineer("Varun", 1, "email@email.com", testValue);
    expect(e.github).tobe(testValue);
})
// get role should retren eng
test("get engineer getEngineer", () => {
    const testValue = "Engineer";
    const e = new Engineer()
})
// set get hub user 