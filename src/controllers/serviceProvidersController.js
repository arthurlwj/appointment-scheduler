import serviceProvider from "../models/ServiceProvider.js";


class serviceProviderController {
    static async getServiceProvider(req, res){
        try{
            const listServiceProvider = await serviceProvider.find({});
            res.status(200).json(listServiceProvider)
        } catch(error){
            res.status(500).json({message: `${error.message} - request failed`})

        }

    }
};


export default serviceProviderController;