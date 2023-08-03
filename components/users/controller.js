import { UserStore } from "./store.js";

class UserController {

    constructor() {
        this.store = new UserStore();
    }

    addUser(name) {
        return new Promise((resolve, reject) => {

            if (!name) {
                console.error('[MessageController] there is no user to create');
                return Promise.reject("Invalida data")
            }

            const data = {
                name: name
            }

            const stored = this.store.addUser(data);
            resolve(stored)
        })
    }

    getUserById(id) {
        return new Promise((resolve, reject) => {
            resolve(this.store.getUserById(id))
        })
    }

    getUsers(customFilter) {
        return this.store.getUsers(customFilter)
    }

    updateUser(id, name) {
        return new Promise(async (resolve, reject) => {

            if (!id || !name) {
                reject("Invalid data")
            }
            const result = await this.store.updateUserName(id, name);
            resolve(result)
        })
    }

    deleteUser(id) {
        return new Promise(async (resolve, reject) => {

            if (!id) {
                reject("Invalid data")
            }
            const result = await this.store.deleteUser(id)
                .then(() => {
                    resolve()
                }).catch((err) => {
                    reject(err)
                });
        })
    }
}

export { UserController }
