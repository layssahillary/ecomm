import mongoose from "mongoose";

mongoose.connect('mongodb://admin:secret@mongodb:27017/ecomm-account?authSource=admin'); // conectando no mongo 


let db = mongoose.connection; // variavel que guarda a conexão do mongo

export default db;