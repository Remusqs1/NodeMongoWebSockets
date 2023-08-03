import mongoose from 'mongoose';

const MongooseSchema = mongoose.Schema;

const mySchema = new MongooseSchema({
    users: [{
        type: MongooseSchema.ObjectId,
        ref: 'User'
    }]
});

const ChatModel = mongoose.model('Chat', mySchema);
export default ChatModel;