import DirectionsBikeOutlinedIcon from '@material-ui/icons/DirectionsBikeOutlined';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ReactSvgPieChart from "react-svg-piechart";


const data = [
    {title: "Data 1", value: 100, color: "#22594e"},
    {title: "Data 2", value: 60, color: "#2f7d6d"},
    {title: "Data 3", value: 30, color: "#3da18d"},
    {title: "Data 4", value: 20, color: "#69c2b0"},
    {title: "Data 5", value: 10, color: "#a1d9ce"},
]


const useStyles = makeStyles(theme =>({
    root : {
        display :'flex',
        justifyContent : 'center',
        flexWrap : 'wrap',
        '&>*' :{
            margin : theme.spacing(0.5),
        },
    },

    chipss:{
        position:'relative',

    }
}));



export default function Overview() {
    const classes = useStyles();


    return(

        <div className={classes.root}>
           <h1>sdasdsasa</h1>
            <ReactSvgPieChart
                data={data}
                // If you need expand on hover (or touch) effect
                expandOnHover
                // If you need custom behavior when sector is hovered (or touched)
                onSectorHover={(d, i, e) => {
                    if (d) {
                        console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                    } else {
                        console.log("Mouse leave - Index:", i, "Event:", e)
                    }
                }}
            />
        </div>
    );

}
