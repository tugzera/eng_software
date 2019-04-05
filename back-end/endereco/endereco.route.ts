import * as restify from 'restify';
import { Routes } from '../routes/routes';
import { Endereco } from './endereco.model';

class enderecoRoutes extends Routes {
    applyRoutes(application: restify.Server) {
        application.get('/endereco', (req, resp, next) => {
            Endereco.find().then(endereco => {
                resp.json(endereco);
                return next();
            })
        });

        application.post('/endereco', (req, resp, next) => {
            let endereco = new Endereco(req.body);

            endereco.save().then(endereco => {
                resp.json(endereco);
            }, error => {
                console.log(error);
            })
            return next();
        });

        application.del('/endereco/:id', (req, resp, next) => {
            Endereco.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            })
        });

        application.patch('/endereco/:id', (req, resp, next) => {
            Endereco.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(endereco => {
                resp.json(endereco);
                return next();
            })
        })


    }
}

export const EnderecoRoutes = new enderecoRoutes();