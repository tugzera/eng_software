"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
exports.arquivoClienteSchema = new mongoose_1.default.Schema({
    cliente: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    foto: {
        type: [mongoose_1.Schema.Types.ObjectId],
        default: undefined,
        required: true
    },
    video: {
        type: [mongoose_1.Schema.Types.ObjectId],
        default: undefined,
        required: true
    }
});
exports.ArquivoCliente = mongoose_1.default.model('ArquivoCliente', exports.arquivoClienteSchema);
