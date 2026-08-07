import mongoose from "mongoose";

export const connectdatabase = async () => {
  try {
    const uri = process.env.MONGO_URI; 

    await mongoose.connect(uri);
    console.log("Banco de dados conectado com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao banco:", error);
  }
};

export default connectdatabase;