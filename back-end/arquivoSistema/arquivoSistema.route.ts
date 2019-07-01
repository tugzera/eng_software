import * as restify from 'restify';
import { Routes } from '../routes/routes';
import { ArquivoSistema } from './arquivoSistema.model';

class arquivoSistemaRoutes extends Routes {
    applyRoutes(application: restify.Server) {
        application.get('/arquivoSistema', (req, resp, next) => {
            ArquivoSistema.find().then(arquivoSistema => {
                resp.json(arquivoSistema);
                return next();
            })
        });

        application.get('/arquivoSistema/:id', (req, resp, next) => {
            ArquivoSistema.findById(req.params.id,  (error, arquivosistema) => {
                if(error) {
                    return resp.send(500);
                }
                resp.json(arquivosistema);
                console.log(arquivosistema);
            })
            return next();
               
        })

        application.post('/arquivoSistema', (req, resp, next) => {
            let arquivoSistema = new ArquivoSistema(req.body);

            arquivoSistema.save().then(arquivoSistema => {
                resp.json(arquivoSistema);
            }, error => {
                console.log(error);
            })
            return next();
        });

        application.del('/arquivoSistema/:id', (req, resp, next) => {
            ArquivoSistema.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            })
        });

        application.patch('/arquivoSistema/:id', (req, resp, next) => {
            ArquivoSistema.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(arquivoSistema => {
                resp.json(arquivoSistema);
                return next();
            })
        })


    }
}

export const ArquivoSistemaRoutes = new arquivoSistemaRoutes();