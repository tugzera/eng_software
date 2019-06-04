import * as mongoose from 'mongoose';

export class ArquivoSistema {
    _id: string;
    nome: string;
    date: string;
    foto: mongoose.Schema.Types.ObjectId[];
}