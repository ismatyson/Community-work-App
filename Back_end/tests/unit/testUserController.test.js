const Validation = require('../../utils/validation')

test("Validate login input", () => {
    const expected = true;
    const body = {
      phone: "0781234535",
      password: "123",
    };
    const actual = Validation.validateLogin(body);
  
    expect(actual).toBe(expected);
});