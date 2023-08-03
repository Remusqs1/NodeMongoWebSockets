import { ChatStore } from "./store.js";

class ChatController {

    constructor() {
        this.store = new ChatStore();
    }

    add(myUsers) {
        if (!myUsers || !Array.isArray(myUsers)) {
            console.error('[ChatController] there is no data to create');
            return Promise.reject("Invalida data")
        }

        const data = {
            users: myUsers
        }

        return this.store.addChat(data);
    }


    getChatsByUserId(userId) {
        return this.store.getAll(userId)
    }

    deleteChat(id) {
        return new Promise(async (resolve, reject) => {

            if (!id) {
                reject("Invalid data")
            }
            const result = await this.store.deleteChat(id)
                .then(() => {
                    resolve()
                }).catch((err) => {
                    reject(err)
                });
        })
    }
}

export { ChatController }
