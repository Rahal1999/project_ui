import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {grey} from "@material-ui/core/colors";


const useStyles = makeStyles(theme => ({
    root: {


       flexGrow: 1,
    },
    menu: {
        width:'10%',
       backgroundColor:'grey',
    },
    title: {
        flexGrow: 1,
    },
    btn:{
        marginLeft:'10%'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function LeftMenuee() {

    const classes = useStyles();

    return(
        <div>
            <Button  className={classes.btn} color="primary" >
                Hello World
            </Button>
        </div>
    );

    // return(
    //     <div className={classes.root}>
    //         <Button className={classes.menuButton}>dasdd   </Button>
    //         <Button>dasddsfd   </Button>
    //         <Button>dasdfsdd   </Button>
    //         <Button>dasdfsdd   </Button>
    //         <Button>dasddfdfd   </Button>
    //
    //     </div>
    // );

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>

            </React.Fragment>
        );
    }

    return (
        <div className={classes.menu}>
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
        </div>
    );

}
