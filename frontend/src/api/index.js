import axios from 'axios'
const url = 'https://crep-check-api.herokuapp.com/posts'

export const fetchPosts = () => axios.get(url) //Fetching the posts from the api
export const createPost = (newPost) => axios.post(url,newPost) //Sending a new post to the api
export const updatePost = (id,updatedPost) => axios.patch(`${url}/${id}`,updatedPost)//Updating a post in the api
export const deletePost = (id) => axios.delete(`${url}/${id}`)  //Deleteing a post from the api
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)//Liking a post from the api