import express from 'express';
import { Response } from './network/response.js';

const router = express.Router();
const response = new Response();
var app = express()

app.use(express.json());
app.use(router);

router.get('/', (req, res) => {
    response.success(req, res, "message list: []")
})

router.get('/message', (req, res) => {
    response.success(req, res, "message list: []")
})

router.post('/message', (req, res) => {
    if (req.query.error !== null && req.query.error !== "") {
        response.error(req, res, "Upps!", 400)
    }
    else response.success(req, res, req.body.text, 201)
})

// app.use('/', (req, res) => {
//     res.send("Hallo")
// })

app.use('/app', express.static('public'))
app.listen(3000)
console.log("App listening at http://localhost:3000")