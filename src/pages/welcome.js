import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonAppBar from '../components/nav-bar';
import SimpleBottomNavigation from '../components/footer';


const useStyles = makeStyles((theme) => ({

}));

export default function SignIn() {
    const classes = useStyles();

    return (
        <Container >
           < ButtonAppBar/>
           <SimpleBottomNavigation/>
        </Container>
    );
}