import express from 'express';
import routes from './network/routes.js';
import DBContext from './db/db.js';
import http from "http";
import { socket } from "./socket.js";

var app = express()
const server = http.createServer(app)
// const socket = new SocketClass();

const db = new DBContext();
db.connect()

app.use(express.json());

socket.connect(server);
routes(app);

app.use('/app', express.static('public'))

server.listen(3000, () => {
    console.log("App listening at http://localhost:3000")
})