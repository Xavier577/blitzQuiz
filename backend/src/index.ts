import { createServer } from "node:http";
import app from "./app";

const server = createServer(app);

const PORT = process.env.PORT || 8080;

process.env.NODE_ENV != "production" &&
  server.on("listening", () =>
    console.log(`listening on http://localhost:${PORT}`)
  );

server.listen(PORT);
