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
var foto_model_1 = require("./foto.model");
var fotoRoutes = /** @class */ (function (_super) {
    __extends(fotoRoutes, _super);
    function fotoRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    fotoRoutes.prototype.applyRoutes = function (application) {
        application.get('/foto', function (req, resp, next) {
            foto_model_1.Foto.find().then(function (foto) {
                resp.json(foto);
                return next();
            });
        });
        application.get('/foto/:id', function (req, resp, next) {
            foto_model_1.Foto.findById(req.params.id, function (error, foto) {
                if (error) {
                    return resp.send(500);
                }
                resp.json(foto);
                console.log(foto);
            });
            return next();
        });
        application.post('/foto', function (req, resp, next) {
            var foto = new foto_model_1.Foto(req.body);
            foto.save().then(function (foto) {
                resp.json(foto);
            }, function (error) {
                console.log(error);
            });
            return next();
        });
        application.del('/foto/:id', function (req, resp, next) {
            foto_model_1.Foto.remove({ _id: req.params.id }).exec().then(function (result) {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            });
        });
        application.patch('/foto/:id', function (req, resp, next) {
            foto_model_1.Foto.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (foto) {
                resp.json(foto);
                return next();
            });
        });
    };
    return fotoRoutes;
}(routes_1.Routes));
exports.FotoRoutes = new fotoRoutes();
