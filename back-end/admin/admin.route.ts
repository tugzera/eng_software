import * as restify from 'restify';
import { Md5 } from 'ts-md5/dist/md5';

import { Routes } from '../routes/routes';
import { Admin } from './admin.model';
import { Cliente } from '../cliente/cliente.model';


class adminRoutes extends Routes {
    applyRoutes(application: restify.Server) {
        application.get('/admin', (req, resp, next) => {
            Admin.find().then(admin => {
                //console.log('admin')
                resp.json(admin);
                return next();
            })
        })

        application.post('/admin', (req, resp, next) => {
            let admin = new Admin(req.body);
            //let myHash = bcrypt.hashSync(admin.password, 10);
            //admin.password = myHash;

            let myHash = <string>Md5.hashStr(<string>admin.password);
            admin.password = myHash;

            admin.save().then(admin => {
                resp.json(admin);
                console.log(admin);
            }, error => {
                console.log(error);
            })
            return next();
        })

        application.del('/admin/:id', (req, resp, next) => {
            Admin.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            })
        })

        application.patch('/admin/:id', (req, resp, next) => {
            Admin.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(admin => {
                resp.json(admin);
                return next();
            })
        })

    }
}

export const AdminRoutes = new adminRoutes();