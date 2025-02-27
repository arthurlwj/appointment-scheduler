import mongoose from "mongoose";

async function connectDataBase(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexão com o MongoDB estabelecida com sucesso");
    }catch(error){
        console.error('Erro ao conectar ao MongoDB', error);
        process.exit(1)
    }
};

export default connectDataBase;