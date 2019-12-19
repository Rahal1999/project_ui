import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import ReactDOM from "react-dom";
import Divider from '@material-ui/core/Divider';
import Chart from "react-google-charts";
import LeftNavigationBar from "./LeftNavigationBar";
import Test from "./Test";
// import Paper from "./PartnerManagementnew";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';

import QueueAnim from 'rc-queue-anim';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: 'rgba(5, 45, 64, 0.96)',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
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

        width: '50%',
        overflowX: 'inherit',
        position: 'relative',
        left: '39%',


    },


    table: {
        minWidth: '100%',
        width:'41%',
        maxHeight:'100%',
        position:'relative !important',



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
    pieChart:{
        display: 'flex',
        maxWidth: '50%',
        marginLeft: '39%',
        backgroundColor:'red',
        position:'relative'
    },
    heading:{
        position:'relative',
        right:'24%',
        fontsize:'15%',
        marginTop:'1%'

    },
});


export default function Overview() {

    const [checked, setChecked] = React.useState(false);

    const [selectedDate, setSelectedDate] = React.useState(new Date('2018-08-18T21:11:54'));

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
        title: "No of users",
        pieHole: 0.5,
        is3D: false,


                backgroundColor: 'EBF2FC',

    };


    return (


            <div class="overviewMain">

                {/*<div class="overviewHeader">*/}
                    <QueueAnim delay={500}>
                        <div key={1}>

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                <Grid container justify="flex-end">
                                    <Typography variant={"h5"} className={classes.heading}>Dashboard</Typography>

                                    <KeyboardDatePicker

                                        className={classes.dateFrom}
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        // color={classes.root.MuiSvgIcon}
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="From..."
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}

                                    />


                                    <KeyboardDatePicker
                                        className={classes.dateTo}
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"

                                        margin="normal"
                                        id="date-picker-inline"
                                        label="To..."
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />


                                </Grid>

                            </MuiPickersUtilsProvider>
                        </div>
                    </QueueAnim>
                {/*</div>*/}


                <QueueAnim delay={750}>
                    <div key={2} className={classes.pieChart} >


                        <Chart
                            chartType="PieChart"
                            width="100%"
                            height="400px"
                            position="relative"

                            data={data}
                            options={options}

                        />


                    </div>
                </QueueAnim>

                <QueueAnim delay={1250}>
                    <div className={classes.table} key={3}>
                        <Paper className={classes.root}>

                            <Table className={classes.table} aria-label="customized table">

                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Service Requested</StyledTableCell>
                                        <StyledTableCell align="center">No. of users<PersonIcon
                                            class="noOfUserIcon"/></StyledTableCell>


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

                        </Paper>
                    </div>

                </QueueAnim>

            </div>

    );
}

