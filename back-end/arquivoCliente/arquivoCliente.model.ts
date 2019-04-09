import mongoose, { Schema } from 'mongoose';

export interface ArquivoCliente extends mongoose.Document {
    cliente: Schema.Types.ObjectId;
    foto: Schema.Types.ObjectId[];
    video: Schema.Types.ObjectId[];
}

export const arquivoClienteSchema = new mongoose.Schema({
    cliente: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    foto: {
        type: Schema.Types.ObjectId,
        required: true
    },
    video: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

export const ArquivoCliente = mongoose.model<ArquivoCliente>('ArquivoCliente', arquivoClienteSchema);