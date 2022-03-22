import { createServer } from "http";
import supertest from "supertest";
import app from "../app";
import { connectDB } from "./index";
import { testSettings } from "./settings";

export const testServer = createServer(app);

const runTestServer = () => {
  const PORT = testSettings.port;
  const startMessage = `listening on http://localhost:${PORT}`;
  testServer.on("listening", () => console.log(startMessage));
  testServer.listen(PORT);
};

connectDB(testSettings.variables.DATABASE_URL).then(() => runTestServer());

export const request = supertest(testServer);
