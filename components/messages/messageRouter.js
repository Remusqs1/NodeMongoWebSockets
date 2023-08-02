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
            const userFilter = req.query.user || null;

            this.controller.getMessages(userFilter)
                .then((result) => {
                    this.response.success(req, res, result, 200);
                }).catch((err) => {
                    this.response.error(req, res, 'Unexpected error', 500, e);
                });;
        });

        this.router.get('/:id', (req, res) => {
            this.controller.getMessageById(req.params.id)
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

        this.router.patch('/:id', (req, res) => {
            this.controller.updateMessage(req.params.id, req.body.message)
                .then((result) => {
                    this.response.success(req, res, result, 200);
                }).catch((err) => {
                    this.response.error(req, res, err, 500);
                });
        })

        this.router.delete('/:id', (req, res) => {
            this.controller.deleteMessage(req.params.id)
                .then((result) => {
                    this.response.success(req, res, `Message with id: ${req.params.id} was deleted`, 200);
                }).catch((err) => {
                    this.response.error(req, res, err, 500);
                });
        })
    }
}

const messageRouter = new MessageRouter();
export default messageRouter.router;