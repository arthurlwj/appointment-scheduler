import express from "express";
import serviceProviderController from "../controllers/serviceProvidersController.js";

const routes = express.Router();

routes.get("/service-providers", serviceProviderController.getServiceProvider);

export default routes;