import { add, getAll } from "./store.js";

class MessageController {

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

            add(response);
            resolve(response)
        })
    }

    getMessages() {
        return new Promise((resolve, reject) => {
            resolve(getAll())
        })
    }
}

export { MessageController }
