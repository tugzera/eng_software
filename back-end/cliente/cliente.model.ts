import mongoose, { Schema } from 'mongoose';

export interface Cliente extends mongoose.Document {
    nome: String;
    cpf: String;
    email: String;
    password: String;
    telefone: String;
    status: String;
    rua: String;
    cep: String;
    numero: Number;
    bairro: String;
    uf: String;
    cidade: String;
    complemento: String;
    

}

const clienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    telefone: {
        type: String,
        required: false
    },
    
    status: {
        type: String,
        required: true,
        select: true
    },
    rua: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    complemento: {
        type: String
    }
})

export const Cliente =  mongoose.model<Cliente>('Cliente', clienteSchema);