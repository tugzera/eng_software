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
var teste_model_1 = require("./teste.model");
var testeRoutes = /** @class */ (function (_super) {
    __extends(testeRoutes, _super);
    function testeRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    testeRoutes.prototype.applyRoutes = function (application) {
        application.get('/teste', function (req, resp, next) {
            teste_model_1.Teste.find().then(function (teste) {
                //console.log('admin')
                resp.json(teste);
                return next();
            });
        });
        /*
        application.post('/login', (req, resp, next) => {
            let obj = new Admin(req.body);
            //console.log('senha: ', obj.password);
            //let myHash = bcrypt.hashSync(obj.password, 10);
            //console.log(myHash);
            let myHash = <String>Md5.hashStr(<string>obj.password);
            obj.password = myHash;
            //console.log(obj.password);
            Admin.findOne({ $and: [{ "email": obj.email }, { "password": obj.password }] })
                .then(u => {
                    if (u != null )
                    {
                        resp.json(u);
                        return next();
                    }
                }).catch(next);


        })

        application.post('/admin', (req, resp, next) => {
            let admin = new Admin(req.body);
            //let myHash = bcrypt.hashSync(admin.password, 10);
            //admin.password = myHash;

            let myHash = <string>Md5.hashStr(<string>admin.password);
            admin.password = myHash;

            admin.save().then(admin => {
                resp.json(admin);
                console.log(admin);
            }, error => {
                console.log(error);
            })
            return next();
        })

        application.del('/admin/:id', (req, resp, next) => {
            Admin.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            })
        })

        application.patch('/admin/:id', (req, resp, next) => {
            Admin.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(admin => {
                resp.json(admin);
                return next();
            })
        })
    */
    };
    return testeRoutes;
}(routes_1.Routes));
exports.TesteRoutes = new testeRoutes();
