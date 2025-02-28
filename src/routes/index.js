import express from "express";
import serviceProvider from "../routes/serviceProvidersRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send ("Appointment Scheduler API"));
    app.use(express.json(), serviceProvider)
};

export default routes;