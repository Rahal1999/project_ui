import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
// import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import SearchIcon from '@material-ui/icons/Search';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles(theme => ({
    root: {
        width: '97%',
        overflowX: 'auto',


    },
    countrytxt: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        flexGrow: 1,
        width: 225,
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1),
        flexGrow: 1,
        width: 225,
    },
    table: {
        minWidth: 250,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginLeft: '-4%',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight: '8%',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        left: '-10%',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dialog: {
        width: '100%',
    },

    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },

}));

function createData(name, address, email, contact, country, openHours, actions) {
    return {name, address, email, contact, country, openHours, actions};
}


export default function PartnerManagementnew() {

    const [age, setAge] = React.useState('');

    const [open, setOpen] = React.useState(false);

    const [value, setValue] = React.useState('female');

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleClickOpenCreate = () => {
        setOpen(true);

    };

    const handleClose = () => {

        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    const add = (

        <IconButton>
            <div class="tableicons">
                <EditOutlinedIcon color={"primary"}/>
                <DeleteOutlineOutlinedIcon color={"error"} onClick={handleClickOpen}/>
            </div>
        </IconButton>
    );

    const rows = [
        createData('Gulf Exchange', 'No.11,Main Street, Jordan', 'gulf@gmail.com', '6.12E+08', 'Jordan',
            'Sun: 6.30am-8.30am ' + 'Sat: 6.30am-', add),
        createData('Al-Amani ', 'No.11,Main Street, Kuwait', 'gulf@gmail.com', '6.12E+08', 'Kuwait',
            'Sun: 6.30am-8.30am\n' + 'Sat: 6.30am-', add),
        createData('Gulf Exchange', 'No.11,Main Street, Jordan', 'gulf@gmail.com', '6.12E+08', 'Bahrain',
            'Sun: 6.30am-8.30am\n' + 'Sat: 6.30am-', add),
        createData('Gulf Exchange', 'No.11,Main Street, Jordan', 'gulf@gmail.com', '6.12E+08', 'Dubai',
            'Sun: 6.30am-8.30am\n' + 'Sat: 6.30am-', add),
        createData('Gulf Exchange', 'No.11,Main Street, Jordan', 'gulf@gmail.com', '6.12E+08', 'Malaysia',
            'Sun: 6.30am-8.30am\n' + 'Sat: 6.30am-', add),
        createData('Gulf Exchange', 'No.11,Main Street, Jordan', 'gulf@gmail.com', '6.12E+08', 'Oman',
            'Sun: 6.30am-8.30am\n' + 'Sat: 6.30am-', add),
        createData('Gulf Exchange', 'No.11,Main Street, Jordan', 'gulf@gmail.com', '6.12E+08', 'Qatar',
            'Sun: 6.30am-8.30am\n' + 'Sat: 6.30am-', add),


    ];


    const classes = useStyles();

    return (
        <div class="table">
            <div class="topbar">

                {/*<Typography>Partner Management</Typography>*/}

                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >

                        </IconButton>

                        <Typography className={classes.title} variant="h6" noWrap>
                            Partner Management
                        </Typography>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                            />

                        </div>
                    </Toolbar>
                    <div class="addicon">
                        <AddOutlinedIcon onClick={handleClickOpenCreate}/>
                    </div>
                </AppBar>


            </div>
            {/*<h1>Partner Management</h1>*/}
            <Paper className={classes.root}>
                <Table aria-label="Partner Management">
                    <TableHead>
                        <TableRow>
                            <TableCell>Partner Name</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">E-mail</TableCell>
                            <TableCell align="center">Contact</TableCell>
                            <TableCell align="center">Country</TableCell>
                            <TableCell align="center">Opening Hours</TableCell>
                            <TableCell align="center">Acions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.address}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.contact}</TableCell>
                                <TableCell align="center">{row.country}</TableCell>
                                <TableCell align="center">{row.openHours}</TableCell>
                                <TableCell align="center">{row.actions}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>

            {/*<Dialog*/}
            {/*className={classes.dialog}*/}
            {/*open={open}*/}
            {/*onClose={handleClose}*/}
            {/*>*/}
            {/*<DialogTitle>Remove Partner</DialogTitle>*/}

            {/*<DialogContent >*/}

            {/*<DialogContentText >*/}
            {/*Are you sure you want to delete this row data?*/}
            {/*</DialogContentText>*/}
            {/*</DialogContent>*/}


            {/*<DialogActions>*/}
            {/*<Button onClick={handleClose} color="primary">Close</Button>*/}
            {/*<Button onClick={handleClose} color="secondary">Agree</Button>*/}


            {/*</DialogActions>*/}

            {/*</Dialog>*/}


            <Dialog
                className={classes.dialog}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Create Partner</DialogTitle>

                <DialogContent>

                    <DialogContentText>

                        <div>
                            <TextField className={classes.countrytxt} id="outlined-basic2" label="Country"
                                       variant="outlined"/>
                        </div>

                        <div>
                            <TextField className={classes.countrytxt} id="outlined-basic2" label="Partner Name"
                                       variant="outlined"/>
                        </div>
                        <div>
                            <TextField className={classes.countrytxt} id="outlined-basic2" label="Address"
                                       variant="outlined"/>
                        </div>
                        <div>
                            <TextField className={classes.countrytxt} id="outlined-basic2" label="E-mail"
                                       variant="outlined"/>
                        </div>
                        <div>
                            <TextField className={classes.countrytxt} id="outlined-basic2" label="Contact"
                                       variant="outlined"/>
                        </div>

                        <TextField
                            id="outlined-multiline-static"
                            label="Opening Hours"
                            multiline
                            rows="4"
                            placeholder="eg : Sun: 6.30am-8.30am "
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        {/*<FormControl className={classes.formControl}>*/}
                        {/*<InputLabel id="demo-controlled-open-select-label">Age</InputLabel>*/}
                        {/*<Select*/}
                        {/*labelId="demo-controlled-open-select-label"*/}
                        {/*id="demo-controlled-open-select"*/}
                        {/*open={open}*/}
                        {/*onClose={handleClose}*/}
                        {/*onOpen={handleOpen}*/}
                        {/*value={age}*/}
                        {/*onChange={handleChange}*/}
                        {/*>*/}
                        {/*<MenuItem value="">*/}
                        {/*<em>None</em>*/}
                        {/*</MenuItem>*/}
                        {/*<MenuItem value={10}>Ten</MenuItem>*/}
                        {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                        {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                        {/*</Select>*/}
                        {/*</FormControl>*/}

                    </DialogContentText>
                </DialogContent>


                <DialogActions>
                    <Button onClick={handleClose} color="primary">Close</Button>
                    <Button onClick={handleClose} color="secondary">Create</Button>


                </DialogActions>

            </Dialog>
        </div>
    );
}
