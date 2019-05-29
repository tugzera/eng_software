import mongoose from 'mongoose';

export interface Foto extends mongoose.Document{
    link: String;
    date: String;
    evento: String;
}

export const fotoSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true,
        unique: true,
        select: false
    },
    date: {
        type: String,
        required: true
    },
    evento: {
        type: String,
        required: true
    }   
        
})

export const Foto = mongoose.model<Foto>('Foto',fotoSchema);