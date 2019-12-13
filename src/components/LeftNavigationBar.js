import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

const items = [
    {name: 'dashboard', label: 'Dashboard'},
    {name: 'userManagement', label: 'User Management'},
    {name: 'partnerManagement', label: 'Partner Management'},
    {name: 'bankManagement', label: 'Bank Representative Management'},
    {name: 'ComBankPartnerManagement', label: 'Com Bank Branch Management'},
    {name: 'slEmbassyManagement', label: 'SL Embassy Management'},
    {name: 'promotionManagement', label: 'Promotion Management'},
]

const useStyles = makeStyles({
    root:{
        maxWidth:'23%',
        maxHeight:'100%',
        width:'25%',
        position:'fixed',
        backgroundColor:'#0b3044',
    },

    user: {
        color:'white',
        left:'75%',
        position:'relative'
    },
    userIcon:{
        left:'70%',
        position:'relative',
        color:'white',
    },
    options:{
        color:'white',
        fontsize: 14,

    },
    typography:{
        fontsize:14,
    },
    settings:{
        color:'white',

    },
    logout:{
        color:'white',
    },
    settingsIcon:{
        color:'white',
    },
    logoutIcon:{
        color:'white',
    }


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
                            <Typography className={classes.options} variant={"subtitle1"} >{ label}</Typography>
                        </ListItem>
                    ))}
                </List>
            </div>


            <div className="bottom2">
                <hr/>
                <List disablePadding dense>
                    <ListItem>

                        <ListItemText className={classes.settings}><SettingsIcon className={classes.settingsIcon}/>   Settings</ListItemText>

                        </ListItem>

                    <ListItem>
                        <ListItemText className={classes.logout}><ExitToAppIcon className={classes.logoutIcon}/>   Logout</ListItemText>
                    </ListItem>
                </List>
            </div>

        </div>

        </div>
    )
}

export default Sidebar
