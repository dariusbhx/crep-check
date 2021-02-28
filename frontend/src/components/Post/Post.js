import React from 'react'
import {useDispatch} from 'react-redux'
import {Card,Icon,Image} from 'semantic-ui-react'
// import {deletePost,likePost} from '../../actions/post'
import {useGlobalContext} from '../../context'
const Post = ({post}) => {
    const {setCurrentId} = useGlobalContext()
    const dispatch = useDispatch()
    console.log(post)
    return (
        <Card >
            <Image src = {post.image}/>
            <Card.Content>
            <Card.Header>{post.title}</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
                {post.price}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {post.description}
            </Card.Content>
        </Card>
    )
}

export default Post