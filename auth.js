function login(username, password) {
  // Check username and password
  if (username === "admin" && password === "9999") {
    return true;
  }

  return false;
}

module.exports = {
  login
};
