import * as restify from 'restify';
import mongoose from 'mongoose';
import { Routes } from '../routes/routes'
import { Enviroment } from './../routes/enviroment';
import { handleError } from './error';
import  corsMiddleware from 'restify-cors-middleware';

export class Server {
    application: restify.Server = restify.createServer({
        name: "Photo System",
        version: "1.0"
    })

    initializeDb(): any {
        (<any>mongoose).Promise = global.Promise;
        return mongoose.connect('mongodb://localhost/db');
    }

    initializeRoutes(routers:Routes[]):Promise<any>{
        return new Promise((resolve, reject)  =>{ 
            try{
                const corsOptions: corsMiddleware.Options = {
                    preflightMaxAge: 86400,
                    origins: ['*'],
                    allowHeaders: ['authorization'],
                    exposeHeaders: ['x-custom-header']  
                  }
                const cors: corsMiddleware.CorsMiddleware = corsMiddleware(corsOptions)
          
                this.application.pre(cors.preflight)
                this.application.use(cors.actual)
                this.application.use(restify.plugins.queryParser())//geralmente utilizando no get para converter pesquisas
                this.application.use(restify.plugins.bodyParser())// convert json em object automaticamente
            
                for( let router of routers){
                    router.applyRoutes(this.application)
                }
    
    
                this.application.listen(Enviroment.porta, () =>{
                    resolve(this.application)
                })
    
                this.application.on('restifyError',handleError)
            }catch(err){    
                reject(err)
            }
        });
    } 

    bootstrap(routers: Routes[] = []):Promise<Server>{ //inicializacao
        return this.initializeDb().then( 
            () =>  this.initializeRoutes(routers).then( 
            () => this) )
        
     }
}