import { describe } from "mocha";
import { expect } from "chai";
// import supertest from "supertest";
import testServer from "./config";
import mongoose from "mongoose";

describe("test if server is running properly", () => {
  // const request = supertest(testServer);

  it("check if server is listening for connections", () => {
    const isServerListening = testServer.listening;
    expect(isServerListening).to.be.true;
  });

  it("check if mongo database is connected", () => {
    const dbConnections = mongoose.connections;
    expect(dbConnections.length).to.greaterThan(0);
  });
});
