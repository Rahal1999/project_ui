import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core";

const items = [
    {name: 'home', label: 'Dashboard'},
    {name: 'billing', label: 'User Management'},
    {name: 'settings', label: 'Partner Management'},
    {name: 'settings', label: 'Bank Representative Management'},
    {name: 'home', label: 'Com Bank Branch Management'},
    {name: 'home', label: 'SL Embassy Management'},
    {name: 'home', label: 'Promotion Management'},
]

const useStyles = makeStyles({
    root:{
        maxWidth:'23%',
        maxHeight:'100%',
        width:'25%',
        position:'fixed',
        backgroundColor:'lightblue',
    },

    user: {

        left:'75%',
        position:'relative'
    },
    userIcon:{
        left:'73%',
        position:'relative'
    },


});

function Sidebar() {
    const classes = useStyles();
    return (
        <div>
        <div className={classes.root}>


            <div>
                <Typography
                    className={classes.user}
                    variant={"button"}
                    align={"justify"}
                >
                    User
                </Typography>
                <PersonIcon className={classes.userIcon}/>
            </div>
            <hr/>


            <div class="middle">
                <List disablePadding dense c>
                    {items.map(({label, name, ...rest}) => (
                        <ListItem key={name} button {...rest}>
                            <Typography variant={"subtitle1"} >{label}</Typography>
                        </ListItem>
                    ))}
                </List>
            </div>


            <div className="bottom2">
                <hr/>
                <List disablePadding dense>
                    <ListItem>
                        <ListItemText className="settings"><SettingsIcon/>Settings</ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText className="logout"><ExitToAppIcon/>Logout</ListItemText>
                    </ListItem>
                </List>
            </div>

        </div>

        </div>
    )
}

export default Sidebar
