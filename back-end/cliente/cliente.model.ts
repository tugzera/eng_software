import mongoose from 'mongoose';
import { Endereco } from './../endereco/endereco.model';

export interface Cliente extends mongoose.Document {
    nome: String;
    cpf: String;
    email: String;
    password: String;
    telefone: String;
    end: Endereco;

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
        required: true
    }
})

export const Cliente =  mongoose.model<Endereco>('Endereco', clienteSchema);