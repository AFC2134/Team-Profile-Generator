const Engineer = require('../lib/Engineer');

test('create an Engineer object', () => {
    const alex = new Engineer('alex', '2','alex@gmail.com', 'AFC2134')
    expect(alex.name).toEqual(expect.any(String));
    expect(alex.Id).toEqual(expect.any(String));
    expect(alex.email).toEqual(expect.any(String));
    expect(alex.gitHub).toEqual(expect.any(String));
})