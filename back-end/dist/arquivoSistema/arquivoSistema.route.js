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
var arquivoSistema_model_1 = require("./arquivoSistema.model");
var arquivoSistemaRoutes = /** @class */ (function (_super) {
    __extends(arquivoSistemaRoutes, _super);
    function arquivoSistemaRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    arquivoSistemaRoutes.prototype.applyRoutes = function (application) {
        application.get('/arquivoSistema', function (req, resp, next) {
            arquivoSistema_model_1.ArquivoSistema.find().then(function (arquivoSistema) {
                resp.json(arquivoSistema);
                return next();
            });
        });
        application.post('/arquivoSistema', function (req, resp, next) {
            var arquivoSistema = new arquivoSistema_model_1.ArquivoSistema(req.body);
            arquivoSistema.save().then(function (arquivoSistema) {
                resp.json(arquivoSistema);
            }, function (error) {
                console.log(error);
            });
            return next();
        });
        application.del('/arquivoSistema/:id', function (req, resp, next) {
            arquivoSistema_model_1.ArquivoSistema.remove({ _id: req.params.id }).exec().then(function (result) {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            });
        });
        application.patch('/arquivoSistema/:id', function (req, resp, next) {
            arquivoSistema_model_1.ArquivoSistema.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (arquivoSistema) {
                resp.json(arquivoSistema);
                return next();
            });
        });
    };
    return arquivoSistemaRoutes;
}(routes_1.Routes));
exports.ArquivoSistemaRoutes = new arquivoSistemaRoutes();
