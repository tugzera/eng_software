import { Server } from './server/server';

const server: Server = new Server;

server.bootstrap([]).then( server => {
    console.log(`Servidor executando na porta ${server.application.address().port}`)
}).catch(error => {
    console.log("Servidor nao inicializou");
    console.error(error);
    process.exit();
})