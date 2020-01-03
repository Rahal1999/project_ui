import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Switch from '@material-ui/core/Switch';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    DatePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import ReactDOM from "react-dom";
import Divider from '@material-ui/core/Divider';
import Chart from "react-google-charts";
import LeftNavigationBar from "./LeftNavigationBar";
import Test from "./Test";
// import Paper from "./PartnerManagementnew";
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import QueueAnim from 'rc-queue-anim';
import SettingsIcon from '@material-ui/icons/Settings';

const StyledTableCell = withStyles(theme => ({
    head: {
        // backgroundColor: 'rgba(5, 45, 64, 0.96)',
        color: 'rgb(12, 12, 11)',
        fontSize: 18,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            // backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow)


function createData(serviceRequested, noOfUsers) {
    return {serviceRequested, noOfUsers};
}


const rows = [
    createData("Com Bank Rates", 180),
    createData("Partner Rates", 70),
    createData("Contact Banks", 55),
    createData("Contact Partners", 22),
    createData("Contact Business Promotion Officers", 34),
    createData("Online Banking", 63),
    createData("Remittance Tracking", 12),
];



const useStyles = makeStyles({
    root: {

        '&$MuiSvgIcon': {

            color: '#0a3144',

        },

        width: '34%',
        overflowX: 'inherit',
        position: 'relative',
        left: '62%',
        marginTop: '-27%'

    },
    orange: {
        color: 'red',
        backgroundColor: 'red',
    },

    table: {
        minWidth: '100%',
        width: '41%',
        maxHeight: '100%',
        left:'-7%',
        position: 'relative !important',


    },
    dateiconfrom: {
        position: 'relative',
        marginTop: '18%',
        right: '128%',
        fontSize:'0.8rem',
        color: '#756e63',
    },
    dateiconto: {
        position: 'relative',
        marginTop: '18%',
        right: '113%',
        fontSize:'0.8rem',
        color: '#756e63',
    },
    dateFrom: {
        margin: '1% !important',
        position: 'relative',
        left: '6%',

    },


    dateTo: {
        margin: '1% !important',
        position: 'relative',
        right: '1%',

    },
    dateepicker: {
        padding: '-1'
    },
    pieChart: {
        display: 'flex',
        maxWidth: '50%',
        marginLeft: '-15%',
        // backgroundColor: 'red',
        position: 'relative'
    },
    heading: {
        position: 'relative',
        right: '22%',
        fontsize: '15%',
        marginTop: '2.7%',

    },
    datepicker1: {
        position: 'relative',
        marginTop: '-16%',
        right: '80%',
        padding: '0px 0 0px'
    },
    datepicker2: {
        position: 'relative',
        marginTop: '-16%',
        right: '80%',
        padding: '0px 0 0px'
    },
    darkmodeswitch: {
        position: 'relative',
        marginTop: '3%',
        right: '3.5%',

    },
    notificationicon: {
        position: 'relative',
        marginTop: '3%',
        right: '4%',
    },
    useravatar: {
        position: 'relative',
        marginTop: '3%',
        right: '2.5%',
        ficolor:'red'
    },
    verticaldivider: {
        position: 'relative',
        right: '3%',
        marginTop: '3%',
    },
    username: {
        position: 'relative',
        right: '2%',
        marginTop: '4%',
    },
    dropdownicon: {
        position: 'relative',
        right: '1.5%',
        marginTop: '3.5%',
    },
    tablename: {
        right: '27%',
        position: 'relative',
        marginTop:'2%',
        color:'rgb(255, 153, 0)',
    },
    piechartname: {
        right: '59%',
        position: 'relative',
        marginTop:'2%',
        color:'rgb(255, 153, 0)',

    },
    dateicon:{
        fontSize:'1.2rem',
        color: '#756e63',
    },


});


export default function Dashboard() {

    const [opensettings, setOpensettings] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpensettings = () => {
        setOpensettings(true);
    };

    const handleClosesettings = () => {
        setOpensettings(false);
    };

    const [checked, setChecked] = React.useState(false);

    const [selectedDate, setSelectedDate] = React.useState(new Date('March 14 2019'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const classes = useStyles();
    const data = [
        ["Service Requested", "No.of Users"],
        ["Com Bank Rates", 180],
        ["Partner Rates", 70],
        ["Contact Banks", 55],
        ["Contact Partners", 22],
        ["Contact Business Promotion Officers", 34],
        ["Online Banking", 63],
        ["Remittance Tracking", 12],
        ["SL Embassy Info", 90],
    ];
    const options = {
        // title: "No of users",

        pieHole: 0.5,
        is3D: false,


        // backgroundColor: 'EBF2FC', //pie chart background color

    };


    return (


        <div class="overviewMain">
            {/*<div style={{height:50,backgroundColor:"red",flexDirection:"row",alignItems:'center',justifyContent:'center'}}>*/}
            {/*<Typography variant={"h5"} className={classes.heading}>Dashboard</Typography>*/}
            {/*<label>   <DateRangeIcon />From</label>*/}
            {/*<label>   <DateRangeIcon />From</label>*/}
            {/*<label>   <DateRangeIcon />From</label>*/}
            {/*</div>*/}

            {/*<div class="overviewHeader">*/}
            <QueueAnim delay={500}>
                <div key={1}>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

                        <Grid container justify="flex-end">
                            <Typography variant={"h5"} className={classes.heading}>Overview</Typography>
                            <div>
                                <div className={classes.dateiconfrom}>
                                    <label> <DateRangeIcon className={classes.dateicon}/>From</label>
                                </div>
                                <div className={classes.datepicker1}>
                                    <DatePicker

                                        variant="inline"
                                        // label="Basic example"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        // style={{
                                        //     padding: "6px 0 7px"
                                        // }}
                                        // InputProps={{
                                        //     style: {
                                        //         padding:"0px 0 0px"
                                        //     }
                                        // }}
                                        style={{padding:"0px 0 0px"}}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className={classes.dateiconto}>
                                    <label> <DateRangeIcon className={classes.dateicon}/>To</label>
                                </div>
                                <div className={classes.datepicker2}>
                                    <DatePicker

                                        variant="inline"
                                        // label="Basic example"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                    />
                                </div>
                            </div>
                            <div className={classes.darkmodeswitch}>
                                <Switch

                                    defaultChecked
                                    value="checkedF"
                                    color="default"
                                    inputProps={{'aria-label': 'checkbox with default color'}}
                                />


                            </div>
                            <div className={classes.notificationicon}>
                                <NotificationsNoneIcon/>

                            </div>
                            <div className={classes.verticaldivider}>
                                <Divider orientation="vertical"/>
                            </div>
                            <div className={classes.useravatar}>
                                <Avatar alt="Remy Sharp" >R</Avatar>

                            </div>
                            <div className={classes.username}>
                                <label>John Doe </label>
                            </div>
                            <div className={classes.dropdownicon}>
                                <ExpandMoreIcon onClick={handleClickOpensettings}/>
                            </div>
                            {/*<KeyboardDatePicker*/}

                            {/*// className={classes.dateFrom}*/}
                            {/*disableToolbar*/}
                            {/*variant="inline"*/}
                            {/*format="MM/dd/yyyy"*/}
                            {/*// color={classes.root.MuiSvgIcon}*/}
                            {/*// margin="normal"*/}
                            {/*// id="date-picker-inline"*/}
                            {/*// label="From..."*/}
                            {/*// value={selectedDate}*/}
                            {/*onChange={handleDateChange}*/}

                            {/*// KeyboardButtonProps={{*/}
                            {/*//     'aria-label': 'change date',*/}
                            {/*// }}*/}

                            {/*/>*/}


                            {/*<KeyboardDatePicker*/}
                            {/*className={classes.dateTo}*/}
                            {/*disableToolbar*/}
                            {/*variant="inline"*/}
                            {/*format="MM/dd/yyyy"*/}

                            {/*margin="normal"*/}
                            {/*id="date-picker-inline"*/}
                            {/*label="To..."*/}
                            {/*value={selectedDate}*/}
                            {/*onChange={handleDateChange}*/}
                            {/*KeyboardButtonProps={{*/}
                            {/*'aria-label': 'change date',*/}
                            {/*}}*/}
                            {/*/>*/}


                        </Grid>

                    </MuiPickersUtilsProvider>
                </div>
            </QueueAnim>
            {/*</div>*/}
            <Grid container justify="flex-end">
            <div className={classes.piechartname}>
                <Typography>NO OF USERS</Typography>
            </div>
            <div className={classes.tablename}>
                <Typography>NO OF USERS</Typography>
            </div>
            </Grid>



            <Grid container justify="flex-end">
            <QueueAnim delay={750}>
                <div key={2} className={classes.pieChart}>


                    <Chart
                        chartType="PieChart"
                        width="560px"
                        height="400px"
                        position="relative"
                    //     x= "10px"
                    // y="0"
                    //
                    // stroke= "none"
                    // stroke-width= "0"
                    // fill= "rgb(52, 52, 52, 0.8)"
                        data={data}
                        options={options}

                    >
                        <rect class="zzz" >

                        </rect>
                    </Chart>


                </div>
            </QueueAnim>



            <QueueAnim delay={1250}>


                <div className={classes.table} key={3}>

                    {/*<Paper className={classes.root}>*/}

                        <Table className={classes.table} aria-label="customized table">

                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Service Requested</StyledTableCell>
                                    <StyledTableCell align="center">No. of users</StyledTableCell>


                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <StyledTableRow key={row.serviceRequested}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.serviceRequested}
                                        </StyledTableCell>

                                        <StyledTableCell align="center">{row.noOfUsers}</StyledTableCell>

                                    </StyledTableRow>
                                ))}

                            </TableBody>

                        </Table>

                    {/*</Paper>*/}
                </div>
            </QueueAnim>
            </Grid>
            <Dialog
                class="dialogclass"
                fullScreen={fullScreen}
                open={opensettings}
                onClose={handleClosesettings}
                aria-labelledby="responsive-dialog-title"
            >
                {/*<DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>*/}
                {/*<DialogContent>*/}
                {/*/!*<DialogContentText>*!/*/}
                {/*/!*Let Google help apps determine location. This means sending anonymous location data to*!/*/}
                {/*/!*Google, even when no apps are running.*!/*/}
                {/*/!*</DialogContentText>*!/*/}
                {/*</DialogContent>*/}
                <DialogActions>
                    <div>

                        <Button onClick={handleClosesettings}>
                            <SettingsIcon/>Settings
                        </Button>

                    </div>

                </DialogActions> <DialogActions>

                <div>
                    <Button onClick={handleClosesettings} autoFocus>
                        <ExitToAppSharpIcon/> Logout
                    </Button>
                </div>
            </DialogActions>
            </Dialog>

        </div>

    );
}

