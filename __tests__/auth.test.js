// import from the sum.js file
const { login, register } = require('../src/auth');

describe('auth/login', () => {
  test('Login must be successful', async () => {
    const result = await login({ username: 'tungnt@softech.vn', password: '123456789' });

    expect(result.ok).toBe(true);
  });

  test('Login must be failed', async () => {
    const result = await login('tungnt@softech.vn', '987654321');

    expect(result.ok).toBe(false);
  });
});
