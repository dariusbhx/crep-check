import axios from 'axios'

export const url = 'http://localhost/api/posts'

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url,newPost)
export const updatePost = (id,updatedPost) => axios.patch(`${url}/${id}`,updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`) 