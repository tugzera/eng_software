import * as mongoose from 'mongoose';

export class ArquivoCliente {
    _id: string;
    cliente: mongoose.Schema.Types.ObjectId;
    foto: mongoose.Schema.Types.ObjectId[];
    video: mongoose.Schema.Types.ObjectId[];
}