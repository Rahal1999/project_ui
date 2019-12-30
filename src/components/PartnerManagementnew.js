import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import Paper from '@material-ui/core/Paper';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
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
import Test from "./Test";
import Slide from '@material-ui/core/Slide';
import Tooltip from '@material-ui/core/Tooltip'
import QueueAnim from 'rc-queue-anim';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';


const useStyles = makeStyles(theme => ({
    root: {
        width: '97%',
        overflowX: 'auto',
        height: '100%',
        maxHeight: '100%',
        // borderBottomLeftRadius:'30px',
        borderBottomRightRadius:'30px'

    },

    selectInputLabel: {
        marginLeft: theme.spacing(2),
    },
    dialogCreateBtn: {
        marginRight: theme.spacing(5),
    },
    countrytxt: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        flexGrow: 1,
        width: 300,
    },
    countrySelect: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        flexGrow: 1,
        width: 300,
    },
    dialogTitle: {
        marginLeft: theme.spacing(0),
        backgroundColor: '#010d121f',

    },
    removeDialog: {
        backgroundColor: '#ff0000ab',
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1),
        flexGrow: 1,
        width: 300,
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
    backgroud: {
        backgroundColor: '#eaf2fd',
        width: '100%',
        height: '100%',
        position: 'inherit'
    },
    dialog: {
        width: '100%',
    },
appbar:{
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
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

    const [openCountrySelect, setopenCountrySelect] = React.useState(false);

    const [openCreate, setOpenCreate] = React.useState(false);

    const [openUpdate, setOpenUpdate] = React.useState(false);

    const [value, setValue] = React.useState('female');

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleClickOpenUpdate = () => {
        setOpenUpdate(true);

    };

    const handleCloseUpdate = () => {

        setOpenUpdate(false);
    };

    const handleClickOpenCountrySelect = () => {
        setopenCountrySelect(true);

    };

    const handleCloseCountrySelect = () => {

        setopenCountrySelect(false);
    };

    const handleClickOpen = () => {
        setOpen(true);

        console.log("dsf")

    };

    const senddata = (name) => {

        console.log(name)

    };

    const handleClickOpenCreate = () => {
        setOpenCreate(true);

    };

    const handleClose = () => {

        setOpen(false);
    };

    const handleCloseCreate = () => {

        setOpenCreate(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };



    const add = (

        <IconButton>
            <div class="tableicons">
                <Tooltip title={"Edit Details"} placement="right" TransitionComponent={Zoom}>
                    <EditOutlinedIcon color={"primary"} onClick={handleClickOpenUpdate}/>
                </Tooltip>

                <Tooltip title={"Delete Partner"} placement="right" TransitionComponent={Zoom}>
                    <DeleteOutlineOutlinedIcon color={"error"} onClick={handleClickOpen}/>
                </Tooltip>
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

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });


    const classes = useStyles();

    return (
        <div className={classes.backgroud}>
            {/*<Test/>*/}
            <div class="table">
                <div class="topbar">
                    <QueueAnim delay={500}>
                        <AppBar className={classes.appbar} key={1} position="static">
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
                                        <SearchIcon class="search"/>
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
                                <Tooltip title={"Create Partner"} TransitionComponent={Zoom}>
                                         {/*// TransitionProps={{timeout: 600}}*/}
                                    <AddOutlinedIcon class="add" onClick={handleClickOpenCreate}/>
                                </Tooltip>
                            </div>
                        </AppBar>
                    </QueueAnim>

                </div>
                {/*<h1>Partner Management</h1>*/}
                <QueueAnim delay={700}>
                    <Paper key={2} className={classes.root}>
                        <Table aria-label="Partner Management">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Partner Name</TableCell>
                                    <TableCell align="center">Address</TableCell>
                                    <TableCell align="center">E-mail</TableCell>
                                    <TableCell align="center">Contact</TableCell>
                                    <TableCell align="center">Country</TableCell>
                                    <TableCell align="center">Opening Hours</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {rows.map(row => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row" >{row.name}</TableCell>
                                        <TableCell align="center">{row.address}</TableCell>
                                        <TableCell align="center">{row.email}</TableCell>
                                        <TableCell align="center">{row.contact}</TableCell>
                                        <TableCell align="center">{row.country}</TableCell>
                                        <TableCell align="center">{row.openHours}</TableCell>
                                        <TableCell  align="center">{row.actions}</TableCell>

                                    </TableRow>


                                ))}


                            </TableBody>
                        </Table>
                    </Paper>
                </QueueAnim>
                <Dialog
                    className={classes.dialog}
                    // TransitionComponent={Transition}
                    open={open}
                    onClose={handleClose}

                >
                    <DialogTitle className={classes.removeDialog}>Remove Partner</DialogTitle>

                    <DialogContent>

                        <DialogContentText>

                            Are you sure you want to delete  this row data?

                        </DialogContentText>

                    </DialogContent>


                    <DialogActions>
                        <Button onClick={handleClose} color="primary">Close</Button>
                        <Button onClick={handleClose} color="secondary">Agree</Button>


                    </DialogActions>

                </Dialog>


                <Dialog
                    className={classes.dialog}
                    open={openCreate}
                    onClose={handleCloseCreate}
                >


                    <DialogTitle className={classes.dialogTitle}>Create Partner</DialogTitle>


                    <DialogContent>
                        <QueueAnim>
                            <div key={1}>

                                <DialogContentText>


                                    <div key={2}>

                                        <InputLabel id="demo-controlled-open-select-label"
                                                    className={classes.selectInputLabel}>Country</InputLabel>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"

                                            open={openCountrySelect}
                                            onClose={handleCloseCountrySelect}
                                            onOpen={handleClickOpenCountrySelect}
                                            value={age}
                                            onChange={handleChange}
                                            className={classes.countrySelect}
                                            variant={"outlined"}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Jordan</MenuItem>
                                            <MenuItem value={20}>Kuwait</MenuItem>
                                            <MenuItem value={30}>Bahrain</MenuItem>
                                        </Select>

                                    </div>

                                    <div key={3}>
                                        <TextField className={classes.countrytxt} id="outlined-basic2"
                                                   label="Partner Name"
                                                   variant="outlined" placeholder={"John Smith"}/>
                                    </div>
                                    <div key={4}>
                                        <TextField className={classes.countrytxt} id="outlined-basic2" label="Address"
                                                   variant="outlined" placeholder={"No.11,Main Street, Kuwait"}/>
                                    </div>


                                    <div key={5}>
                                        <TextField className={classes.countrytxt} id="outlined-basic2" label="E-mail"
                                                   variant="outlined" placeholder={"abc@gmail.com"}/>
                                    </div>

                                    <div key={6}>
                                        <TextField className={classes.countrytxt} id="outlined-basic2" label="Contact"
                                                   variant="outlined" placeholder={"094-051-6565"}/>
                                    </div>

                                    <div key={7}>
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
                                    </div>

                                </DialogContentText>
                            </div>
                        </QueueAnim>
                    </DialogContent>


                    <DialogActions>


                        <Button onClick={handleCloseCreate} color="primary">Close</Button>

                        <Button className={classes.dialogCreateBtn} onClick={handleCloseCreate}
                                color="secondary">Create</Button>


                    </DialogActions>

                </Dialog>


                <Dialog
                    className={classes.dialog}
                    open={openUpdate}
                    onClose={handleCloseUpdate}
                >
                    <DialogTitle className={classes.dialogTitle}>Update Partner</DialogTitle>

                    <DialogContent>
                        <QueueAnim>
                            <div key={1}>
                                <DialogContentText>

                                    <div>

                                        <InputLabel id="demo-controlled-open-select-label"
                                                    className={classes.selectInputLabel}
                                        >Country</InputLabel>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"

                                            open={openCountrySelect}
                                            onClose={handleCloseCountrySelect}
                                            onOpen={handleClickOpenCountrySelect}
                                            value={age}
                                            onChange={handleChange}
                                            className={classes.countrySelect}
                                            variant={"outlined"}

                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Dubai</MenuItem>
                                            <MenuItem value={20}>USA</MenuItem>
                                            <MenuItem value={30}>Canada</MenuItem>
                                        </Select>

                                    </div>

                                    <div>
                                        <TextField className={classes.countrytxt} id="outlined-basic2"
                                                   label="Partner Name"
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

                                </DialogContentText>
                            </div>
                        </QueueAnim>
                    </DialogContent>


                    <DialogActions>
                        <Button onClick={handleCloseUpdate} color="primary">Close</Button>
                        <Button className={classes.dialogCreateBtn} onClick={handleCloseUpdate}
                                color="secondary">Update</Button>


                    </DialogActions>

                </Dialog>
            </div>
        </div>
    );
}
