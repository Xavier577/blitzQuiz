import { Server } from "http";
import mongoose from "mongoose";
import chalk from "chalk";
import { baseSettings } from "./settings";

interface DBConnectOptions {
  retries?: number;
  delay?: number;
}

export const connectDB = async (
  url = baseSettings.variables.DATABASE_URL,
  dbConnectOptions?: DBConnectOptions
) => {
  let retries = dbConnectOptions?.retries ? dbConnectOptions.retries : 3;
  let delay = dbConnectOptions?.delay ? dbConnectOptions.delay : 3;

  while (retries > 0) {
    try {
      await mongoose.connect(url);
      console.log(chalk.greenBright("Successfully connected to DB!"));
      break;
    } catch (err) {
      retries -= 1;
      console.error(err);
      if (retries > 0) {
        console.log(
          chalk.redBright(
            `Failed to connect to DB!, ${retries} retr${
              retries > 1 ? "ies" : "y"
            } left`
          )
        );
        console.log(chalk.yellowBright("Retrying...."));
      } else {
        console.log(chalk.redBright("Failed to Connect to DB!"));
      }
      await new Promise((res) => setTimeout(res, delay * 1000));
    }
  }
};

export const runServer = (server: Server) => {
  baseSettings.environment !== "production" &&
    server.on("listening", () => {
      console.log(`listening on http://localhost:${baseSettings.port}`);
    });

  server.listen(baseSettings.port);
};
