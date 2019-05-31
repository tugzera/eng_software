import mongoose, { Schema } from 'mongoose';

export interface ArquivoSistema extends mongoose.Document {
    nome: String;
    date: String;
    foto: [Schema.Types.ObjectId];
    video: [Schema.Types.ObjectId];
}

export const arquivoSistemaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true
    },
    foto: {
        type: [Schema.Types.ObjectId],
        default: undefined,
        required: false
    },
    video: {
        type: [Schema.Types.ObjectId],
        default: undefined,
        required: false
    }
})

export const ArquivoSistema = mongoose.model<ArquivoSistema>('ArquivoSistema', arquivoSistemaSchema);