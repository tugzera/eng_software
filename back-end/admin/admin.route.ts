import * as restify from 'restify';
import { Routes } from '../routes/routes';
import { Admin } from './admin.model';

class adminRoutes extends Routes {
    applyRoutes(application: restify.Server) {
        application.get('/admin', (req, resp, next) => {
            Admin.find().then(admin => {
                resp.json(admin);
                return next();
            })
        })



        
    }
}