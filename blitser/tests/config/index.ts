import { createServer } from "http";
import app from "../../src/app";
import { connectDB } from "../../src/config";

const testServer = createServer(app);

const runTestServer = () => {
  const PORT = 4000;
  testServer.on("listening", () =>
    console.log(`listening on http://localhost:${PORT}`)
  );
  testServer.listen(PORT);
};

connectDB("mongodb://127.0.0.1:27017/bliser_testserver").then(() =>
  runTestServer()
);

export default testServer;
