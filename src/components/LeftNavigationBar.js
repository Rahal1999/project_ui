import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({


    left_menu: {
        width: '20%',
        backgroundColor: '#00796B',
        height: '672px',
    },
    left_menu_btn: {
        width: '100%',
        justifyContent: 'normal',
        fontSize:'8pt',
    },
    left_menu_btn_footer: {
        marginTop:-100,
        fontSize:'8pt',
        width: '100%',
        justifyContent: 'normal',
    },
    user:{
        left: '73%',
    }

}));

export default function LeftNavigationBar() {


    const classes = useStyles();

    return (

        <div>

        <div className={classes.left_menu}>
            <Typography className={classes.user}> User  <PersonIcon/></Typography>


            <Button className={classes.left_menu_btn}> Dashboard</Button>


            <Button className={classes.left_menu_btn}>User Management</Button>


            <Button className={classes.left_menu_btn}>Partner Management</Button>


            <Button className={classes.left_menu_btn}>Bank Representative Management</Button>


            <Button className={classes.left_menu_btn}>Com Bank Branch Management</Button>


            <Button className={classes.left_menu_btn}>SL Embassy Management</Button>


            <Button className={classes.left_menu_btn}>Promotion Management</Button>





        </div>
            <div>
                <Button className={classes.left_menu_btn_footer}>Settings</Button>
                <Button className={classes.left_menu_btn_footer}>Logout</Button>
            </div>
        </div>

    );

}


