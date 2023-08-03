import mongoose from 'mongoose';
import { config } from '../config/config.js';

class DBContext {

    constructor() {
        this.mongoose = mongoose;
        this.mongoose.Promise = global.Promise;
    }

    async connect(url) {
        const dbUrl = url || config.dbUrl
        this.mongoose.connect(dbUrl, {
            useNewUrlParser: true
        });
    }
}

export default DBContext