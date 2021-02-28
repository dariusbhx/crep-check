import React,{useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import Posts from '../../components/Posts/Posts';
import useStyles from './styles'
import {useGlobalContext} from '../../context'
import {getPosts} from '../../actions/post'


export default function Home() {
    const {currentId} = useGlobalContext()
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getPosts())
    },[currentId,dispatch])
    return (
        <Container max-width ="lg">
            <Container>
                <Grid item xs={12} sm ={7}>
                    <Posts />
                </Grid>
            </Container>
        </Container>
    )
}

