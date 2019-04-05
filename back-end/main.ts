import { Server } from './server/server';
import { AdminRoutes } from './admin/admin.route';

const server: Server = new Server;

server.bootstrap([AdminRoutes]).then( server => {
    console.log(`Servidor executando na porta ${server.application.address().port}`)
}).catch(error => {
    console.log("Servidor nao inicializou");
    console.error(error);
    process.exit();
})