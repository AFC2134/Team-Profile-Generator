const Manager = require('../lib/Manager');


test('create an Manager object', () => {
    const alex = new Manager('alex', '2','alex@gmail.com', '617-504-9021')
    expect(alex.name).toEqual(expect.any(String));
    expect(alex.Id).toEqual(expect.any(String));
    expect(alex.email).toEqual(expect.any(String));
    expect(alex.officeNum).toEqual(expect.any(String));
})