import mongoose from 'mongoose';

const MongooseSchema = mongoose.Schema;

const mySchema = new MongooseSchema({
    user: String,
    message: {
        type: String,
        required: true
    },
    date: Date,
    success: Boolean
});

const myModel = mongoose.model('Message', mySchema);
export default myModel;