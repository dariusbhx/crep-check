import {UPDATE,DELETE,FETCH_ALL,CREATE} from '../constants/constants'

// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) =>{
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        
        case CREATE:
            return[...posts, action.payload]

        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)

        case DELETE:
            return posts.filter((post) => post._id !== action.payload) //Will return the posts that have not been requested to be deleted

        default:
            return posts;
    }
} 
