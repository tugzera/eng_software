import mongoose from 'mongoose';

export interface Video extends mongoose.Document {
    link: String;
    date: Date;
}

export const videoSchema = new mongoose.Schema({
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

export const Video = mongoose.model<Video>('Video', videoSchema);