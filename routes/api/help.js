const express = require("express");
const ctrl = require("../../controllers/help");

const helpRouter = express.Router();

helpRouter.post("/help", ctrl.needHelp);

module.exports = helpRouter;