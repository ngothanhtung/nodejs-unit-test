const axios = require('axios');

// Login with username & password
//
async function login({ username, password }) {
  try {
    const response = await axios.post('https://server.aptech.io/auth/login', {
      username,
      password,
    });

    return { ...response.data, ok: true };
  } catch (error) {
    return { ...error.response.data, ok: false };
  }
}

module.exports = { login };
