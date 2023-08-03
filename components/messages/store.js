import Model from '../../components/messages/model.js';

class MessageStore {

    // TODO catch error
    async addMessage(message) {
        return new Promise(async (resolve, reject) => {
            const myMessage = new Model(message);
            try {
                const resMongo = await myMessage.save();
                resolve(resMongo);
            } catch (error) {
                reject(error)
            }
        });
    }

    async getMessages(userFilter) {
        return new Promise((resolve, reject) => {
            let filter = {}
            if (userFilter !== null) {
                filter = { user: userFilter };
            }

            try {
                const data = Model.find(filter)
                    .populate('user')
                    .exec();
                resolve(data)
            } catch (error) {
                reject(error)
            }

        })
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
        const deleted = await Model.deleteOne(
            { _id: id }
        );

        return deleted;
    }

    async deleteAll() {
        const deleted = await Model.deleteMany({});
        return deleted;
    }

}

export { MessageStore }