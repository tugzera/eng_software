import * as restify from 'restify';
import { Routes } from '../routes/routes';
import { Foto } from './foto.model';

class fotoRoutes extends Routes {
    applyRoutes(application: restify.Server) {
        application.get('/foto', (req, resp, next) => {
            Foto.find().then(foto => {
                resp.json(foto);
                return next();
            })
        });

        application.get('/foto/:id', (req, resp, next) => {
            Foto.findById(req.params.id,  (error, foto) => {
                if(error) {
                    return resp.send(500);
                }
                resp.json(foto);
                console.log(foto);    
            })
            return next();
               
        })

        application.post('/foto', (req, resp, next) => {
            let foto = new Foto(req.body);
             
            foto.save().then(foto => {
                resp.json(foto);
            }, error => {
                console.log(error);
            })
            return next();
        });

        application.del('/foto/:id', (req, resp, next) => {
            Foto.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            })
        });

        application.patch('/foto/:id', (req, resp, next) => {
            Foto.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(foto => {
                resp.json(foto);
                return next();
            })
        })


    }
}

export const FotoRoutes = new fotoRoutes();