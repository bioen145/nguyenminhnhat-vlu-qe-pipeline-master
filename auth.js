function login(username, password) {
  // Check username and password
  if (username === "admin" && password === "123") {
    return true;
  }

  return false;
}

module.exports = {
  login
};
