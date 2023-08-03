import express from 'express';
import routes from './network/routes.js';
import { config } from './config/config.js';
import DBContext from './db/db.js';

const db = new DBContext();
db.connect()

var app = express()
app.use(express.json());
routes(app);

app.use('/app', express.static('public'))
app.listen(3000)
console.log("App listening at http://localhost:3000")