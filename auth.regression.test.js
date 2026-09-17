const { login } = require("./auth");

describe("Regression Test - Login functionality", () => {
  test("Login successfully with correct username and password", () => {
    expect(login("admin", "123")).toBe(true);
  });

  test("Login failed with incorrect password", () => {
    expect(login("admin", "999")).toBe(false);
  });

  test("Login failed with incorrect username", () => {
    expect(login("user", "123")).toBe(false);
  });

  test("Login failed with empty username", () => {
    expect(login("", "123")).toBe(false);
  });

  test("Login failed with empty password", () => {
    expect(login("admin", "")).toBe(false);
  });

  test("Login failed when username and password are empty", () => {
    expect(login("", "")).toBe(false);
  });

  test("Login failed with special characters in password", () => {
    expect(login("admin", "@#$%")).toBe(false);
  });

  test("Login failed with locked account", () => {
    expect(login("locked", "123")).toBe(false);
  });
});
