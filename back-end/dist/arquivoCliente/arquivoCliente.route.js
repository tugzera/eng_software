"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../routes/routes");
var arquivoCliente_model_1 = require("./arquivoCliente.model");
var arquivoClienteRoutes = /** @class */ (function (_super) {
    __extends(arquivoClienteRoutes, _super);
    function arquivoClienteRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    arquivoClienteRoutes.prototype.applyRoutes = function (application) {
        application.get('/arquivoCliente', function (req, resp, next) {
            arquivoCliente_model_1.ArquivoCliente.find().then(function (arquivoCliente) {
                resp.json(arquivoCliente);
                return next();
            });
        });
        application.post('/arquivoCliente', function (req, resp, next) {
            var arquivoCliente = new arquivoCliente_model_1.ArquivoCliente(req.body);
            arquivoCliente.save().then(function (arquivoCliente) {
                resp.json(arquivoCliente);
            }, function (error) {
                console.log(error);
            });
            return next();
        });
        application.del('/arquivoCliente/:id', function (req, resp, next) {
            arquivoCliente_model_1.ArquivoCliente.remove({ _id: req.params.id }).exec().then(function (result) {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            });
        });
        application.patch('/arquivoCliente/:id', function (req, resp, next) {
            arquivoCliente_model_1.ArquivoCliente.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (arquivoCliente) {
                resp.json(arquivoCliente);
                return next();
            });
        });
    };
    return arquivoClienteRoutes;
}(routes_1.Routes));
exports.ArquivoClienteRoutes = new arquivoClienteRoutes();
