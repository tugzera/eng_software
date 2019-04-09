import * as restify from 'restify';
import { Routes } from '../routes/routes';
import { Video } from './video.model';

class videoRoutes extends Routes {
    applyRoutes(application: restify.Server) {
        application.get('/video', (req, resp, next) => {
            Video.find().then(video => {
                resp.json(video);
                return next();
            })
        });

        application.post('/video', (req, resp, next) => {
            let video = new Video(req.body);

            video.save().then(video => {
                resp.json(video);
            }, error => {
                console.log(error);
            })
            return next();
        });

        application.del('/video/:id', (req, resp, next) => {
            Video.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            })
        });

        application.patch('/video/:id', (req, resp, next) => {
            Video.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(video => {
                resp.json(video);
                return next();
            })
        })


    }
}

export const VideoRoutes = new videoRoutes();