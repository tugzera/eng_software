import mongoose from 'mongoose';

export interface Foto extends mongoose.Document{
    link: String;
    date: Date;
}

export const fotoSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true,
        unique: true,
        select: false
    },
    date: {
        type: Date,
        required: true
    }   
        
})

export const Foto = mongoose.model<Foto>('Foto',fotoSchema);