import React,{useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import {UseDispatch} from 'react-redux';
import Posts from '../../components/Posts/Posts';
import useStyles from './styles'
export default function Home() {
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

