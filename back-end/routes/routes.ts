import * as restify from 'restify'

export abstract class Routes {
    abstract applyRoutes( application: restify.Server) : any
}