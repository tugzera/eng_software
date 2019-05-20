import { LoginRoutes } from './login/login.route';
import { ClienteRoutes } from './cliente/cliente.route';
import { Server } from './server/server';
import { AdminRoutes } from './admin/admin.route';

const server: Server = new Server;

server.bootstrap([AdminRoutes, ClienteRoutes, LoginRoutes]).then( server => {
    console.log(`Servidor executando na porta ${server.application.address().port}`)
}).catch(error => {
    console.log("Servidor nao inicializou");
    console.error(error);
    process.exit();
})