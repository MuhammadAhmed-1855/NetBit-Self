


import express from "express";
import { body } from "express-validator";

import subController from "../controllers/sub.controller.js";
import requestHandler from "../handlers/request.handler.js";
import subModel from "../models/subModel.js";
import tokenMiddleware from "../middlewares/token.middleware.js";
import router from "./user.route.js";


router.put(
    "/pay",
    tokenMiddleware.auth,    
    requestHandler.validate,    
    subController.Pay
  );

router.put(
    "/subscribe",
    tokenMiddleware.auth,    
    requestHandler.validate,    
    subController.Subcribe
  );
  
  router.put(
    "/unsubscribe",
    tokenMiddleware.auth,    
    requestHandler.validate,
    subController.UnSubcribe
  );

  export default router;