import express from "express";
import path from "path";

const adminRouter = express.Router();

adminRouter.use(express.static(path.join(__dirname, "..", "views")));

export default adminRouter;
