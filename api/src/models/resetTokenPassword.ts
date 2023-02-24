import { model, Schema } from "mongoose";

const resetTokenPasswordSchema = new Schema({
    token: String,
    user: {
        _id: String,
        email: String,
        __v: Number
    }
});

const ResetTokenPassword = model('resetTokenPassword', resetTokenPasswordSchema);

export default ResetTokenPassword;