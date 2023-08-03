import mongoose from 'mongoose';

const MongooseSchema = mongoose.Schema;

const mySchema = new MongooseSchema({
    name: String
});

const UserModel = mongoose.model('User', mySchema);
export default UserModel;