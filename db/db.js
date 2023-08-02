import mongoose from 'mongoose';

class DBContext {

    constructor() {
        this.mongoose = mongoose;
        this.mongoose.Promise = global.Promise;
    }

    async connect(url) {
        this.mongoose.connect(url, {
            useNewUrlParser: true
        });
    }
}

export default DBContext