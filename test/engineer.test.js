const Engineer = require("../lib/engineer");

//get github user name via git gethub method
test("can set Github via constructor", () => {
    const testValue = "GitHubUsername";
    const e = new Engineer("Varun", 1, "email@email.com", testValue);
    expect(e.gitHub).tobe(testValue);
})
// get role should retren eng

// set get hub user 