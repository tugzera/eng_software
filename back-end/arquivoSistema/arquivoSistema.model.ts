import mongoose, { Schema } from 'mongoose';

export interface ArquivoSistema extends mongoose.Document {
    nome: String;
    date: Date;
    foto: Schema.Types.ObjectId[];
    video: Schema.Types.ObjectId[];
}

export const arquivoSistemaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true
    },
    foto: {
        type: [Schema.Types.ObjectId],
        default: undefined,
        required: true
    },
    video: {
        type: [Schema.Types.ObjectId],
        default: undefined,
        required: true
    }
})

export const ArquivoSistema = mongoose.model<ArquivoSistema>('ArquivoSistema', arquivoSistemaSchema);