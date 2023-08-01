import express from 'express';
import routes from './network/routes.js';

var app = express()
app.use(express.json());
routes(app);

app.use('/app', express.static('public'))
app.listen(3000)
console.log("App listening at http://localhost:3000")