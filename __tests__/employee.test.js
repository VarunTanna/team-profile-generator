const Employee = require("../lib/employee")
test('Can create employee instance', () => {
    var e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set a name", () => {
    const name = "Varun";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

// id 
 test ("can set id", () => {
     const testValue = 100;
     const e = new Employee("Varun", testValue);
     expect(e.id).toBe(testValue);
 });

// email
test ("can set email", () => {
    const testValue = "email@email.com";
    const e = new Employee("Varun", 1, testValue);
    expect(e.email).toBe(testValue);
});


// get name
test("can get name getName", () => {
    const testValue = "Varun";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
}) 
// get id
test("can get id getId", () => {
    const testValue = 100;
    const e = new Employee("Varun", testValue);
    expect(e.getId()).toBe(testValue);
})
//get email
test(" can get email getEmail", () => {
    const testValue = "email@email.com";
    const e = new Employee("Varun", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});
// get role
test("can get getRole", () => {
    const testValue = "Employee";
    const e = new Employee("Varun", 1, testValue);
    expect(e.getRole()).toBe(testValue)
})


//test wont run