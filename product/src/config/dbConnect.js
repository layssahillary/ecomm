import mongoose from "mongoose";

mongoose.connect("mongodb://admin:secret@127.0.0.1:27017/ecomm-product?authSource=admin"); // conectando no mongo 

let db = mongoose.connection; // variavel que guarda a conexão do mongo

export default db;