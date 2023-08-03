import { MessageStore } from "./store.js";

class MessageController {

    constructor() {
        this.store = new MessageStore();
    }

    addMessage(data) {

        const { user, message, chat, file } = data
        return new Promise((resolve, reject) => {

            if (!user || !message || !chat) {
                console.error('[MessageController] there is invalida data');
                return reject("Invalida data")
            }

            console.log(file);
            let fileUrl = file ? 'localhost:3000/app/files/' + file.filename : ''
            console.log(fileUrl);

            const sentData = {
                user: user,
                message: message,
                chat: chat,
                date: new Date(),
                success: true,
                file: fileUrl
            }
            try {
                this.store.addMessage(sentData);
                resolve(sentData)
            } catch (error) {
                reject(error)
            }

        })
    }

    getMessageById(id) {
        return new Promise((resolve, reject) => {
            resolve(this.store.getMessageById(id))
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

    deleteAll() {
        return new Promise(async (resolve, reject) => {
            const result = await this.store.deleteAll()
                .then(() => {
                    resolve()
                }).catch((err) => {
                    reject(err)
                });
        })
    }
}

export { MessageController }
