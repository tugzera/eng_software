import * as restify from 'restify';
import { Md5 } from 'ts-md5/dist/md5';

import { Cliente } from './cliente.model';
import { Routes } from '../routes/routes';

class clienteRoutes extends Routes {
    applyRoutes(application: restify.Server) {
        application.get('/cliente', (req, resp, next) => {
            Cliente.find().then(cliente => {
                resp.json(cliente);
                return next();
            })
        })

        application.get('/cliente/:id', (req, resp, next) => {
            Cliente.findById(req.params.id,  (error, cliente) => {
                if(error) {
                    return resp.send(500);
                }
                resp.json(cliente);
                console.log(cliente);
            })
            return next();
               
        })

        application.post('/cliente', (req, resp, next) => {
            let cliente = new Cliente(req.body);
            let myHash = <string>Md5.hashStr(<string>cliente.password);
            //console.log("aq");
            cliente.password = myHash;
            
            cliente.save().then(cliente => {
                resp.json(cliente);
                return next();
            }, error => {
                console.log(error);
            })
        })

        application.del('/cliente/:id', (req, resp, next) => {
            Cliente.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            })
        })

        application.patch('/cliente/:id', (req, resp, next) => {
            Cliente.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true}).then( cliente => {
                resp.json(cliente);
                return next();
            })
        })

    }
}

export const ClienteRoutes = new clienteRoutes();