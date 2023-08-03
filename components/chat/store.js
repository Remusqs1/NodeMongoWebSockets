import Model from './model.js';

class ChatStore {

    addChat(chat) {
        const data = new Model(chat);
        return data.save();
    }

    getAll(customFilter) {
        return new Promise((resolve, reject) => {
            let filter = {}
            if (customFilter) {
                filter = { users: customFilter };
            }

            try {
                const data = Model.find(filter)
                    .populate('users')
                    .exec();
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    }

    async deleteChat(id) {
        const deleted = await Model.deleteOne(
            { _id: id }
        );

        return deleted;
    }

}

export { ChatStore }