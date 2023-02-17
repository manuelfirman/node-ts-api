import { Schema, Types, model, Model } from "mongoose";
import { Blog } from "../interfaces/blog.interface";

const BlogSchema = new Schema<Blog>(
    {
        name: {
            type: String,
            required: true,

        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        user: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true
        }

    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const BlogModel = model("blogs", BlogSchema);

export { BlogModel };