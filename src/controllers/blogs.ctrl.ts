import { Request, Response } from "express";
import { getOneBlog, getAllBlogs, updateOneBlog, deleteOneBlog, createBlog } from "../service/blogs.service";
import { handleHTTP } from "../utils/error.handler";

const getBlog = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getOneBlog(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    } catch (e) {
        handleHTTP(res, "ERROR_GET_BLOG");
    }
}

const getBlogs = async (req: Request, res: Response) => {
    try {
        const response = await getAllBlogs();
        res.send(response);
    } catch (e) {
        handleHTTP(res, "ERROR_GET_BLOGS");
    }
}

const updateBlog = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateOneBlog(id, body);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    } catch (e) {
        handleHTTP(res, "ERROR_UPDATE_BLOG");
    }
}

const postBlog = async ({ body }: Request, res: Response) => {
    try {
        const response = await createBlog(body);
        res.send(response);
    } catch (e) {
        handleHTTP(res, "ERROR_POST_BLOG");
    }
}

const deleteBlog = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteOneBlog(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    } catch (e) {
        handleHTTP(res, "ERROR_DELETE_BLOG");
    }
}


export {
    getBlog,
    getBlogs,
    updateBlog,
    postBlog,
    deleteBlog
}