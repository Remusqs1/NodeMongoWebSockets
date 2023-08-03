import mongoose from 'mongoose';

const MongooseSchema = mongoose.Schema;

const mySchema = new MongooseSchema({
    user: {
        type: MongooseSchema.ObjectId,
        ref: 'Chat'
    },
    chat: {
        type: MongooseSchema.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    },
    date: Date,
    success: Boolean,
    file: String
});

const myModel = mongoose.model('Message', mySchema);
export default myModel;