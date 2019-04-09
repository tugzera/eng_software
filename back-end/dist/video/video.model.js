"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.videoSchema = new mongoose_1.default.Schema({
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
});
exports.Video = mongoose_1.default.model('Video', exports.videoSchema);
