import express from 'express';
import { Response } from '../../network/response.js';
import { ChatController } from './controller.js';

class ChatRouter {
    constructor() {
        this.router = express.Router();
        this.response = new Response();
        this.controller = new ChatController();
        this.setupRoutes();
    }

    setupRoutes() {

        this.router.get('/:userId', (req, res) => {
            this.controller.getChatsByUserId(req.params.userId)
                .then((result) => {
                    this.response.success(req, res, result, 200);
                }).catch((err) => {
                    this.response.error(req, res, 'Unexpected error', 500, e);
                });;
        });

        this.router.post('/', (req, res) => {
            this.controller.add(req.body.users)
                .then((result) => {
                    this.response.success(req, res, result, 201);
                }).catch((err) => {
                    this.response.error(req, res, err, 500, err);
                });
        });

        this.router.delete('/:id', (req, res) => {
            this.controller.deleteChat(req.params.id)
                .then((result) => {
                    this.response.success(req, res, `Chat with id: ${req.params.id} was deleted`, 200);
                }).catch((err) => {
                    this.response.error(req, res, err, 500);
                });
        })
    }
}

const router = new ChatRouter();
export default router.router;