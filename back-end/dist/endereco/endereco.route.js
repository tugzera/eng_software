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
var endereco_model_1 = require("./endereco.model");
var enderecoRoutes = /** @class */ (function (_super) {
    __extends(enderecoRoutes, _super);
    function enderecoRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    enderecoRoutes.prototype.applyRoutes = function (application) {
        application.get('/endereco', function (req, resp, next) {
            endereco_model_1.Endereco.find().then(function (endereco) {
                resp.json(endereco);
                return next();
            });
        });
        application.post('/endereco', function (req, resp, next) {
            var endereco = new endereco_model_1.Endereco(req.body);
            endereco.save().then(function (endereco) {
                resp.json(endereco);
            }, function (error) {
                console.log(error);
            });
            return next();
        });
        application.del('/endereco/:id', function (req, resp, next) {
            endereco_model_1.Endereco.remove({ _id: req.params.id }).exec().then(function (result) {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            });
        });
        application.patch('/endereco/:id', function (req, resp, next) {
            endereco_model_1.Endereco.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (endereco) {
                resp.json(endereco);
                return next();
            });
        });
    };
    return enderecoRoutes;
}(routes_1.Routes));
exports.EnderecoRoutes = new enderecoRoutes();
