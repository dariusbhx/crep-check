import express from 'express'

const router = express.Router()

import {createPost,updatePost, deletePost, likePost,getPosts} from '../controllers/postControllers.js'

router.get("/", getPosts)
router.post("/", createPost)
router.patch("/:id", updatePost)
router.delete("/:id", deletePost)
router.patch("/:id/likePost", likePost)

export default router