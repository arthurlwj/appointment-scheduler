import express from "express";
import serviceProviderController from "../controllers/serviceProvidersController.js";

const routes = express.Router();

routes.get("/service-providers", serviceProviderController.getServiceProvider);
routes.post("/service-providers", serviceProviderController.registerServiceProvider)

export default routes;