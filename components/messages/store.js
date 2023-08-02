import mongoose from 'mongoose';
import Model from '../../components/messages/model.js';
import { config } from '../../config/config.js';

class MessageStore {

    constructor() {
        this.mongoose = mongoose;
        this.mongoose.Promise = global.Promise;
        this.mongoose.connect(config.dbUrl, {
            useNewUrlParser: true
        });
    }

    async addMessage(message) {
        const myMessage = new Model(message);
        const resMongo = await myMessage.save();
    }

    async getMessages(userFilter) {
        let filter = {}
        if (userFilter !== null) {
            filter = { user: userFilter };
        }

        const messages = Model.find(filter);
        return messages;
    }

    async getMessageById(id) {
        const message = Model.findById(id);
        return message;
    }

    async updateText(id, message) {

        const updatedMessage = await Model.findOneAndUpdate(
            { _id: id },
            { message: message },
            { new: true }
        );

        return updatedMessage;
    }

    async deleteMessage(id) {
        const updatedMessage = await Model.deleteOne(
            { _id: id }
        );

        return updatedMessage;
    }

}

export { MessageStore }