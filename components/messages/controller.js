import { MessageStore } from "./store.js";

class MessageController {

    constructor() {
        this.store = new MessageStore();
    }

    addMessage(user, message) {
        return new Promise((resolve, reject) => {

            if (!user || !message) {
                console.error('[MessageController] there is no user or message to send');
                return reject("Invalida data")
            }

            const response = {
                user: user,
                message: message,
                date: new Date(),
                success: true
            }

            this.store.addMessage(response);
            resolve(response)
        })
    }

    getMessageById(id) {
        return new Promise((resolve, reject) => {
            resolve(this.store.getMessageById())
        })
    }

    getMessages(userFilter) {
        return new Promise((resolve, reject) => {
            resolve(this.store.getMessages(userFilter))
        })
    }

    updateMessage(id, message) {
        return new Promise(async (resolve, reject) => {

            if (!id || !message) {
                reject("Invalid data")
            }
            const result = await this.store.updateText(id, message);
            resolve(result)
        })
    }

    deleteMessage(id) {
        return new Promise(async (resolve, reject) => {

            if (!id) {
                reject("Invalid data")
            }
            const result = await this.store.deleteMessage(id)
                .then(() => {
                    resolve()
                }).catch((err) => {
                    reject(err)
                });
        })
    }
}

export { MessageController }
