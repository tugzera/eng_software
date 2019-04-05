"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = function (req, resp, error, done) {
    error.toJSON = function () {
        return {
            message: error.message
        };
    };
};
