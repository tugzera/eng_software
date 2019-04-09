"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../routes/routes");
var video_model_1 = require("./video.model");
var videoRoutes = /** @class */ (function (_super) {
    __extends(videoRoutes, _super);
    function videoRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    videoRoutes.prototype.applyRoutes = function (application) {
        application.get('/video', function (req, resp, next) {
            video_model_1.Video.find().then(function (video) {
                resp.json(video);
                return next();
            });
        });
        application.post('/video', function (req, resp, next) {
            var video = new video_model_1.Video(req.body);
            video.save().then(function (video) {
                resp.json(video);
            }, function (error) {
                console.log(error);
            });
            return next();
        });
        application.del('/video/:id', function (req, resp, next) {
            video_model_1.Video.remove({ _id: req.params.id }).exec().then(function (result) {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            });
        });
        application.patch('/video/:id', function (req, resp, next) {
            video_model_1.Video.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (video) {
                resp.json(video);
                return next();
            });
        });
    };
    return videoRoutes;
}(routes_1.Routes));
exports.VideoRoutes = new videoRoutes();
