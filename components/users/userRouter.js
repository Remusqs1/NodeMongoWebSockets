import express from 'express';
import { Response } from '../../network/response.js';
import { UserController } from './controller.js';

class UserRouter {
    constructor() {
        this.router = express.Router();
        this.response = new Response();
        this.controller = new UserController();
        this.setupRoutes();
    }

    setupRoutes() {

        this.router.get('/', (req, res) => {
            const customFilter = req.query.user || null;

            this.controller.getUsers(customFilter)
                .then((result) => {
                    this.response.success(req, res, result, 200);
                }).catch((err) => {
                    this.response.error(req, res, 'Unexpected error', 500, e);
                });;
        });

        this.router.get('/:id', (req, res) => {
            this.controller.getUserById(req.params.id)
                .then((result) => {
                    this.response.success(req, res, result, 200);
                }).catch((err) => {
                    this.response.error(req, res, 'Unexpected error', 500, e);
                });;
        });

        this.router.post('/', (req, res) => {
            this.controller.addUser(req.body.name)
                .then((result) => {
                    this.response.success(req, res, result, 201);
                }).catch((err) => {
                    this.response.error(req, res, err, 500, err);
                });

        });

        this.router.patch('/:id', (req, res) => {
            this.controller.updateUser(req.params.id, req.body.name)
                .then((result) => {
                    this.response.success(req, res, result, 200);
                }).catch((err) => {
                    this.response.error(req, res, err, 500);
                });
        })

        this.router.delete('/:id', (req, res) => {
            this.controller.deleteUser(req.params.id)
                .then((result) => {
                    this.response.success(req, res, `User with id: ${req.params.id} was deleted`, 200);
                }).catch((err) => {
                    this.response.error(req, res, err, 500);
                });
        })
    }
}

const router = new UserRouter();
export default router.router;