import express from 'express';
import multer from 'multer';
import path from 'path';

import { Response } from '../../network/response.js';
import { MessageController } from './controller.js';

class MessageRouter {
    constructor() {
        this.storage = multer.diskStorage({
            destination: 'public/files',
            filename: (req, file, cb) => {
                cb(null, file.fieldname + "-" + Date.now() +
                    path.extname(file.originalname))
            }
        });

        this.upload = multer({ storage: this.storage });

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

        this.router.post('/', this.upload.single('file'), (req, res) => {
            
            const data = {
                user: req.body.user,
                message: req.body.message,
                chat: req.body.chat,
                file : req.file
            }

            this.controller.addMessage(data)
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

        this.router.delete('/all', (req, res) => {
            console.log("Immm");
            this.controller.deleteAll()
                .then((result) => {
                    this.response.success(req, res, `All Messages were deleted`, 200);
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