import { model, Schema } from 'mongoose';

const postSchema = new Schema({
    name: String,
});

const Post = model('post', postSchema);

export default Post;