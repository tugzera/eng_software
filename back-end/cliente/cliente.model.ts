import mongoose, { Schema } from 'mongoose';
import { Endereco } from './../endereco/endereco.model';

export interface Cliente extends mongoose.Document {
    nome: String;
    cpf: String;
    email: String;
    password: String;
    telefone: String;
    end: Schema.Types.ObjectId;

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
    },
    end: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

export const Cliente =  mongoose.model<Endereco>('Endereco', clienteSchema);