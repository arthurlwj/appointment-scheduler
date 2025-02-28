import mongoose from "mongoose";

const serviceProviderSchema = new mongoose.Schema({
    name: { type: String, required: true},
    phone: { type: String },
    services: { type: [String] }
}, { versionKey: false });

const serviceProvider = mongoose.model("service_providers", serviceProviderSchema);

export default serviceProvider;