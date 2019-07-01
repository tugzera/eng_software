import mongoose from 'mongoose';

export interface Video extends mongoose.Document {
    link: String;
    date: String;
}

export const videoSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true,
        unique: true,
        select: false
    },
    date: {
        type: String,
        required: true
    }
})

export const Video = mongoose.model<Video>('Video', videoSchema);