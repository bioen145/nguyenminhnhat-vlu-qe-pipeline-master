const { login } = require("./auth");

test("Smoke Test - Login successfully with valid credentials", () => {
  expect(login("admin", "123")).toBe(true);
});
