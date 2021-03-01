import React from 'react'
import Post from '../Post/Post'
import { CircularProgress } from '@material-ui/core'
import { useSelector} from 'react-redux'
import useStyles from './styles'
import {Card} from 'semantic-ui-react'
import './Posts.css'
const Posts = () => {
    const posts = useSelector((state) => state.posts)
    console.log(posts)
  return (
    !posts.length ? <CircularProgress /> : (
      <div className ="posts-div">
        <Card.Group  itemsPerRow = {3}  className ="card-container" >
          {posts.map((post) => (
              <Post post={post} key ={post._id}   />
          ))}
        </Card.Group>
      </div>
     
    )
  )
        }


export default Posts
