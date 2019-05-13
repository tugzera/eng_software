"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var restify = __importStar(require("restify"));
var mongoose_1 = __importDefault(require("mongoose"));
var enviroment_1 = require("./../routes/enviroment");
var error_1 = require("./error");
var restify_cors_middleware_1 = __importDefault(require("restify-cors-middleware"));
var Server = /** @class */ (function () {
    function Server() {
        this.application = restify.createServer({
            name: "Photo System",
            version: "1.0"
        });
    }
    Server.prototype.initializeDb = function () {
        mongoose_1.default.Promise = global.Promise;
        return mongoose_1.default.connect('mongodb://localhost/photodb', { useNewUrlParser: true,
            useCreateIndex: true
        });
    };
    Server.prototype.initializeRoutes = function (routers) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var corsOptions = {
                    preflightMaxAge: 86400,
                    origins: ['*'],
                    allowHeaders: ['authorization'],
                    exposeHeaders: ['x-custom-header']
                };
                var cors = restify_cors_middleware_1.default(corsOptions);
                _this.application.pre(cors.preflight);
                _this.application.use(cors.actual);
                _this.application.use(restify.plugins.queryParser()); //geralmente utilizando no get para converter pesquisas
                _this.application.use(restify.plugins.bodyParser({ mapParams: false })); // convert json em object automaticamente
                _this.application.use(restify.plugins.authorizationParser());
                _this.application.use(restify.plugins.acceptParser(_this.application.acceptable));
                for (var _i = 0, routers_1 = routers; _i < routers_1.length; _i++) {
                    var router = routers_1[_i];
                    router.applyRoutes(_this.application);
                }
                _this.application.listen(enviroment_1.Enviroment.porta, function () {
                    resolve(_this.application);
                });
                _this.application.on('restifyError', error_1.handleError);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    Server.prototype.bootstrap = function (routers) {
        var _this = this;
        if (routers === void 0) { routers = []; }
        return this.initializeDb().then(function () { return _this.initializeRoutes(routers).then(function () { return _this; }); });
    };
    return Server;
}());
exports.Server = Server;
