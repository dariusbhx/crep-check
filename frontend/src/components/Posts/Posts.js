import React from 'react'
import Post from '../Post/Post'
import {Grid, CircularProgress } from '@material-ui/core'
import { useSelector} from 'react-redux'
const Posts = () => {
    const posts = useSelector((state) => state.posts)
     
   
    return (
        <div>
            {!posts.length ? <CircularProgress /> : (
                <Grid  container alignItems ="stretch" spacing = {3}>
                    {posts.map((post) => (
                        <Grid item key ={post._id} xs={12} sm={6} >
                            <Post post={post}  />
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    )
}

export default Posts
