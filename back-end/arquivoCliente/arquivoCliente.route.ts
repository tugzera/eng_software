import * as restify from 'restify';
import { Routes } from '../routes/routes';
import { ArquivoCliente } from './arquivoCliente.model';

class arquivoClienteRoutes extends Routes {
    applyRoutes(application: restify.Server) {
        application.get('/arquivoCliente', (req, resp, next) => {
            ArquivoCliente.find().then(arquivoCliente => {
                resp.json(arquivoCliente);
                return next();
            })
        })

        application.post('/arquivoCliente', (req, resp, next) => {
            let arquivoCliente = new ArquivoCliente(req.body);

            arquivoCliente.save().then(arquivoCliente => {
                resp.json(arquivoCliente);
            }, error => {
                console.log(error);
            })
            return next();
        })

        application.del('/arquivoCliente/:id', (req, resp, next) => {
            ArquivoCliente.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            })
        })

        application.patch('/arquivoCliente/:id', (req, resp, next) => {
            ArquivoCliente.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true}).then( arquivoCliente => {
                resp.json(arquivoCliente);
                return next();
            })
        })

    }
}

export const ArquivoClienteRoutes = new arquivoClienteRoutes();