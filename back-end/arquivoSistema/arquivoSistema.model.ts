import mongoose, { Schema } from 'mongoose';

export interface ArquivoSistema extends mongoose.Document {
    //_id: Schema.Types.ObjectId;
    nome: String;
    date: String;
    fotos: [Schema.Types.ObjectId];
    videos: [Schema.Types.ObjectId];
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
    fotos: {
        type: [Schema.Types.ObjectId],
        default: undefined,
        required: false
    },
    videos: {
        type: [Schema.Types.ObjectId],
        default: undefined,
        required: false
    }
})

export const ArquivoSistema = mongoose.model<ArquivoSistema>('ArquivoSistema', arquivoSistemaSchema);