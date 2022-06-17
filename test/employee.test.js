const Employee = require("../lib/employee")
// tutor help
test('Can create employee instance', () => {
    var e = new Employee();
    expect(typeof(e)).tobe("Object");
});

test("Can set a name", () => {
    const name = "Varun",
    const e = new Employee(name);
    expect(e.name).tobe(name);
});

// id 
 test ("can set id", () => {
     const testValue = 100;
     const e = new Employee("Varun", testValue);
     expect(e.id).tobe(testValue);
 });

// email
test ("can set email", () => {
    const testValue = "email@email.com";
    const e = new Employee("Varun", 1, testValue);
    expect(e.email).tobe(testValue);
});


// get name
test("can get name getName", () => {
    const testValue = "Varun",
    const e = new Employee(testValue);
    expect(e.getName()).tobe(testValue);
}) 
// get id
test("can get id getId", () => {
    const testValue = 100;
    const e = new Employee("Varun", testValue);
    expect(e.getId()).tobe(testValue);
})
//get email
test(" can get email getEmail", () => {
    const testValue = "email@email.com";
    const e = new Employee("Varun", 1, testValue);
    expect(e.getEmail()).tobe(testValue);
});
// get role
test("can get getRole", () => {
    const testValue = "Employee";
    const e = new Employee("Varun", 1, testValue);
    expect(e.getRole()).tobe(testValue)
})