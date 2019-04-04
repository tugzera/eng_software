import * as restify from 'restify'

export const handleError = (req: restify.Request, resp: restify.Response, error:any, done:any) => {
    error.toJSON = () => {
        return {
            message: error.message
        }
    }
}