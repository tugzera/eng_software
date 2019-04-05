import mongoose from 'mongoose';

export interface Endereco extends mongoose.Document {
    rua: String;
    cep: String;
    numero: Number;
    bairro: String;
    uf: String;
    cidade: String;
    complemento: String;
}

const enderecoSchema = new mongoose.Schema({
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

export const Endereco = mongoose.model<Endereco>('Endereco', enderecoSchema);