import React from 'react'
import Post from '../Post/Post'
import {Grid, CircularProgress } from '@material-ui/core'
import { useSelector} from 'react-redux'
import useStyles from './styles'
import {Card} from 'semantic-ui-react'

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    console.log(posts)
   const classes = useStyles()
  return (
    !posts.length ? <CircularProgress /> : (
      <Card.Group alignitems ="center"   >
        {posts.map((post) => (
            <Post post={post} key ={post._id}   />
        ))}
      </Card.Group>
    )
  )
        }


export default Posts
