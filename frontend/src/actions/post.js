import * as api from '../api'
import {CREATE,UPDATE,FETCH_ALL,DELETE} from '../constants/constants'


export const getPosts = () => async (dispatch) => {
    try{
        const {data} = await api.fetchPosts()
        dispatch({type:FETCH_ALL, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({type: CREATE, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id,post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id,post)
        dispatch({type: UPDATE, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost()
        dispatch({type:DELETE, payload: id})
    }catch(error){
        console.log(error)
    }
}