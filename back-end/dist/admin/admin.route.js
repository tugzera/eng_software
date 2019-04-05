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
var admin_model_1 = require("./admin.model");
var adminRoutes = /** @class */ (function (_super) {
    __extends(adminRoutes, _super);
    function adminRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    adminRoutes.prototype.applyRoutes = function (application) {
        application.get('/admin', function (req, resp, next) {
            admin_model_1.Admin.find().then(function (admin) {
                resp.json(admin);
                return next();
            });
        });
        application.post('/admin', function (req, resp, next) {
            var admin = new admin_model_1.Admin();
            admin.save().then(function (admin) {
                resp.json(admin);
            }, function (error) {
                console.log(error);
            });
            return next();
        });
        application.del('/admin/:id', function (req, resp, next) {
            admin_model_1.Admin.remove({ _id: req.params.id }).exec().then(function (result) {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            });
        });
        application.patch('/admin/:id', function (req, resp, next) {
            admin_model_1.Admin.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (admin) {
                resp.json(admin);
                return next();
            });
        });
    };
    return adminRoutes;
}(routes_1.Routes));
exports.AdminRoutes = new adminRoutes();
