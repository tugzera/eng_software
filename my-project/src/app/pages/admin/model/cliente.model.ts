import * as mongoose from 'mongoose';
export class Cliente {
    _id?: mongoose.Schema.Types.ObjectId;
    email?: string;
    nome?: string;
    cpf?: string;
    status?: string;
    rua?: string;
    cep?: string;
    numero?: number;
    bairro?: string;
    uf?: string;
    cidade?: string;
    complemento?: string;
}