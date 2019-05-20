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
var md5_1 = require("ts-md5/dist/md5");
var routes_1 = require("../routes/routes");
var admin_model_1 = require("./../admin/admin.model");
var cliente_model_1 = require("./../cliente/cliente.model");
var loginRoutes = /** @class */ (function (_super) {
    __extends(loginRoutes, _super);
    function loginRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    loginRoutes.prototype.applyRoutes = function (application) {
        application.post('/login', function (req, resp, next) {
            var obj = new admin_model_1.Admin(req.body);
            var myHash = md5_1.Md5.hashStr(obj.password);
            obj.password = myHash;
            admin_model_1.Admin.findOne({ $and: [{ "email": obj.email }, { "password": obj.password }] })
                .then(function (u) {
                if (u != null) {
                    resp.json(u);
                    return next();
                }
            }).catch(next);
            //console.log("aqui");
            var user = new cliente_model_1.Cliente(req.body);
            var myHash1 = md5_1.Md5.hashStr(user.password);
            user.password = myHash1;
            console.log(user);
            cliente_model_1.Cliente.findOne({ $and: [{ "email": user.email }, { "password": user.password }] }).
                then(function (user) {
                if (user != null) {
                    resp.json(user);
                    //console.log(user);
                    return next();
                }
            }).catch(next);
        });
    };
    return loginRoutes;
}(routes_1.Routes));
exports.LoginRoutes = new loginRoutes();
