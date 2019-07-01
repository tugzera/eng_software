import * as restify from 'restify';
import { Md5 } from 'ts-md5/dist/md5';

import { Routes } from '../routes/routes';
import { Admin } from './../admin/admin.model';
import { Cliente } from './../cliente/cliente.model';

class loginRoutes extends Routes {
    applyRoutes(application: restify.Server) {
        application.post('/login', (req, resp, next) => {
            let obj = new Admin(req.body);
            let myHash = <String>Md5.hashStr(<string>obj.password);
            obj.password = myHash;
            Admin.findOne({ $and: [{ "email": obj.email }, { "password": obj.password }] })
                .then(u => {
                    if (u != null) {
                        resp.json(u);
                        return next();
                    }
                }).catch(next);
            //console.log("aqui");
            
            let user = new Cliente(req.body);
            let myHash1 = <String>Md5.hashStr(<string>user.password);
            user.password = myHash1;
            //console.log(user);
            Cliente.findOne({ $and: [{ "email": user.email }, { "password": user.password }] }).
                then(user => {
                    if (user != null) {
                        resp.json(user);
                        //console.log(user);
                        return next();
                    }
                }).catch(next);

        })
    }
}

export const LoginRoutes = new loginRoutes();