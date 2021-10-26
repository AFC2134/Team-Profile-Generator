const Intern = require('../lib/Intern');

test('create an Intern object', () => {
    const alex = new Intern('alex', '2','alex@gmail.com', 'UT')
    expect(alex.name).toEqual(expect.any(String));
    expect(alex.Id).toEqual(expect.any(String));
    expect(alex.email).toEqual(expect.any(String));
    expect(alex.schoolName).toEqual(expect.any(String));
})