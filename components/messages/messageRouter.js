import express from 'express';
import { Response } from '../../network/response.js';
import { MessageController } from './controller.js';

class MessageRouter {
    constructor() {
        this.router = express.Router();
        this.response = new Response();
        this.controller = new MessageController();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/', (req, res) => {
            this.controller.getMessages()
                .then((result) => {
                    this.response.success(req, res, result, 200);
                }).catch((err) => {
                    this.response.error(req, res, 'Unexpected error', 500, e);
                });;
        });

        this.router.post('/', (req, res) => {
            this.controller.addMessage(req.body.user, req.body.message)
                .then((result) => {
                    this.response.success(req, res, result, 201);
                }).catch((err) => {
                    this.response.error(req, res, err, 400);
                });

        });
    }
}

const messageRouter = new MessageRouter();
export default messageRouter.router;