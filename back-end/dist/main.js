"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var foto_route_1 = require("./foto/foto.route");
var login_route_1 = require("./login/login.route");
var cliente_route_1 = require("./cliente/cliente.route");
var server_1 = require("./server/server");
var admin_route_1 = require("./admin/admin.route");
var server = new server_1.Server;
server.bootstrap([admin_route_1.AdminRoutes, cliente_route_1.ClienteRoutes, login_route_1.LoginRoutes, foto_route_1.FotoRoutes]).then(function (server) {
    console.log("Servidor executando na porta " + server.application.address().port);
}).catch(function (error) {
    console.log("Servidor nao inicializou");
    console.error(error);
    process.exit();
});
