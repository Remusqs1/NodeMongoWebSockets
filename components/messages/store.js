import mongoose from 'mongoose';
import Model from '../../components/messages/model.js';
import { config } from '../../config/config.js';

mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl, {
    useNewUrlParser: true
});

async function addMessage(message) {
    const myMessage = new Model(message);
    const resMongo = await myMessage.save();
}

async function getMessages() {
    const messages = Model.find();
    return messages;
}

export { addMessage as add, getMessages as getAll }