import { expect } from "chai";
import { request } from "../config/test";

const testUser = {
  firstName: "joseph",
  lastName: "tsegen",
  email: "josephtsegen10@gmail.com",
  password: "8qRqtCTAQWWrLhIe9Cdqb",
  confirm_password: "8qRqtCTAQWWrLhIe9Cdqb",
};

const unauthorizedUser = {
  email: "josephtsegen11@gmail.com",
  password: "o95uGy6At-UqVuDBBC1_i",
};

describe("testing the /api/auth", () => {
  it("POST /api/auth/signup should return 200", async () => {
    const response = await request
      .post("/api/auth/signup")
      .send(testUser)
      .set("Accept", "application/json");
    expect(response.statusCode).to.eql(200);
  });

  it("POST /api/auth/login/password should return 200 with a user that has been signed up", async () => {
    const response = await request
      .post("/api/auth/login/password")
      .send({ email: testUser.email, password: testUser.password })
      .set("Accept", "application/json");

    expect(response.statusCode).to.eql(200);
  });

  it("POST /api/auth/login/password should return 401 with a user that has not been signed up", async () => {
    const response = await request
      .post("/api/auth/login/password")
      .send(unauthorizedUser)
      .set("Accept", "application/json");

    expect(response.statusCode).to.eql(401);
  });
});
