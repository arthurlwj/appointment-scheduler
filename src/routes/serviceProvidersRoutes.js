import express from "express";
import serviceProviderController from "../controllers/serviceProvidersController.js";

const routes = express.Router();

routes.get("/service-providers", serviceProviderController.getServiceProvider);
routes.get("/service-providers/:id", serviceProviderController.serviceProviderListForId);
routes.post("/service-providers", serviceProviderController.registerServiceProvider);
routes.put("/service-providers/:id", serviceProviderController.updateServiceProvider);
routes.delete("/service-providers/:id", serviceProviderController.deleteServiceProvider)


export default routes;