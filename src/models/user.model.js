import mongoose, { Schema } from 'mongoose';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            index: true // for enabling searching on the field
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        fullname: {
            type: String,
            required: true
        },
        avatar: {
            type: String, //cloudinary url
            required: true
        },
        coverImage: {
            type: String

        },
        refreshToken: {
            type: String,
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }

        ]
    },
    { timestamps: true }
);

//hooks (middleware) pre hook(example:perform encryption of password before saving)
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()

})

//to check password
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

//methods to generate accesstoken and refreshtoken:

export const User = mongoose.model('User', userSchema);
