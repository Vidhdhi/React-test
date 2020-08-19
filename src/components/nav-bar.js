import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
        maxWidth:'30px',
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <Button className={classes.title} href={'/'} color="inherit">home</Button>
                    <Button href={'/login'} color="inherit">Login</Button>
                    <Button href={'/register'} color="inherit">register</Button>
                    <Button href={'/about'} color="inherit">about</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
