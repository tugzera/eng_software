"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server/server");
var admin_route_1 = require("./admin/admin.route");
var server = new server_1.Server;
server.bootstrap([admin_route_1.AdminRoutes]).then(function (server) {
    console.log("Servidor executando na porta " + server.application.address().port);
}).catch(function (error) {
    console.log("Servidor nao inicializou");
    console.error(error);
    process.exit();
});
