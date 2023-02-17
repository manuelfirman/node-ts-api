import { BlogModel } from "../models/blog.model";
import { Blog } from "../interfaces/blog.interface";

const getOneBlog = async (id: string) => {
    const responseBlog = await BlogModel.findOne({_id: id});
    return responseBlog;
}

const getAllBlogs = async () => {
    const responseBlogs = await BlogModel.find({});
    return responseBlogs;
}

const createBlog = async (item: Blog) => {
    const responseCreate = await BlogModel.create(item);
    return responseCreate;
}

const updateOneBlog = async (id: string, data: Blog) => {
    const responseUpdate = await BlogModel.updateOne({_id: id}, data, { new: true});
    return responseUpdate;
}

const deleteOneBlog = async (id: string) => {
    const responseDelete = await BlogModel.deleteOne({_id: id});
    return responseDelete;
}

export {
    getOneBlog,
    getAllBlogs,
    createBlog,
    updateOneBlog,
    deleteOneBlog
}