import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    type: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model("PostMessage", messageSchema);

export default PostMessage;