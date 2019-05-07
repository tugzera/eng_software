import mongoose from 'mongoose';

export interface Admin extends mongoose.Document {
    nome: String;
    email: String;
    password: String;
    status: String;

}

const adminSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    status: {
        type: String,
        required: true,
        select: false
    }
})

export const Admin = mongoose.model<Admin>('Admin', adminSchema);