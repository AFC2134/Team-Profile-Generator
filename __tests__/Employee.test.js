const { test } = require('@jest/globals')
const Employee = require('../lib/Employee');

test('creates a Employee object', () => {
    const Employee = new Employee('Alex', '1', "alexC@gmail.com")
    expect(alex.name).toEqual(expect.any(String));
    expect(alex.id).toEqual(expect.any(String));
    expect(alex.email).toEqual(expect.any(String));
})