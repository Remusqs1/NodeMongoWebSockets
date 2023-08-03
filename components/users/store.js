import Model from '../../components/users/model.js';

class UserStore {

    addUser(user) {
        const data = new Model(user);
        const resMongo = data.save();
        return resMongo;
    }

    getUsers(customFilter) {
        let filter = {}
        if (customFilter !== null) {
            filter = { user: customFilter };
        }

        const data = Model.find(filter);
        return data;
    }

    async getUserById(id) {
        const user = Model.findById(id);
        return user;
    }

    async updateUserName(id, name) {

        const updatedName = await Model.findOneAndUpdate(
            { _id: id },
            { name: name },
            { new: true }
        );

        return updatedName;
    }

    async deleteUser(id) {
        const deleted = await Model.deleteOne(
            { _id: id }
        );

        return deleted;
    }

}

export { UserStore }