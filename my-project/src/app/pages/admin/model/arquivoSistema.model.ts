import * as mongoose from 'mongoose';
export class ArquivoSistema {
    _id: string;
    nome: string;
    date: string;
    fotos: [string];
    videos: mongoose.Schema.Types.ObjectId[];
}