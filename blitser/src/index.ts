import http from "http";
import app from "./app";
import { runServer, connectDB } from "./config";

const server = http.createServer(app);
connectDB().then(() => runServer(server));
