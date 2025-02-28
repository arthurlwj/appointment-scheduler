import serviceProvider from "../models/ServiceProvider.js";

class serviceProviderController {
  static async getServiceProvider(req, res) {
    try {
      const listServiceProvider = await serviceProvider.find({});
      res.status(200).json(listServiceProvider);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failed` });
    }
  }

  static async serviceProviderListForId(req, res) {
    try {
      const id = req.params.id;
      const serviceProviderById = await serviceProvider.findById(id);
      res.status(200).json(serviceProviderById);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failed` });
    }
  }

  static async registerServiceProvider(req, res) {
    const bodyServiceProvider = req.body;
    try {
      const serviceCreated = await serviceProvider.create(bodyServiceProvider);
      res.status(201).json({
        message: "registered new service provider",
        service: serviceCreated,
      });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failed` });
    }
  }

  static async updateServiceProvider(req, res) {
    try {
      const id = req.params.id;
      const updatedServiceProviders = await serviceProvider.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedServiceProviders);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failed` });
    }
  };

  static async deleteServiceProvider(req, res) {
    try{
      const id = req.params.id;
      await serviceProvider.findByIdAndDelete(id)
      res.status(200).send("Removed");
    }catch(error){
      res.status(500).json({ message: `${error.message} - request failed` });
    }
  }
}

export default serviceProviderController;
