"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.fotoSchema = new mongoose_1.default.Schema({
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
});
exports.Foto = mongoose_1.default.model('Foto', exports.fotoSchema);
