"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var clienteSchema = new mongoose_1.default.Schema({
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
});
exports.Cliente = mongoose_1.default.model('Cliente', clienteSchema);
