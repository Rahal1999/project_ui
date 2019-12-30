import React from 'react';
import './optionstyles.css';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import Overview from "./Overview";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {makeStyles} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import PartnerManagementnew from "./PartnerManagementnew";
import Divider from '@material-ui/core/Divider';
import QueueAnim from 'rc-queue-anim';
// const useStyles = makeStyles(theme =>({
//     logoutIcon:{
//         color:'white',
//     },
//     settingsIcon:{
//         color:'white',
//     },
// }));
//
// const classes = useStyles();


class Options extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            showComponent2: false,
            showComponent: false,
        };
        this._onButtonClick2 = this._onButtonClick2.bind(this);
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            showComponent: true,
            showComponent2: false,
        });
    }

    _onButtonClick2() {
        this.setState({
            showComponent: false,
            showComponent2: true,
        });
    }

    // classes = useStyles();


    render() {
        // const  {classes} = this.props;
        return (
            <div >
                <div>
                    <div class="top">

                        <label >User</label><PersonIcon />

                    </div>


                    <div >

                        <QueueAnim delay={500}>
                            <div key={1}>
                                <button class="optionBtn topbtn" onClick={this._onButtonClick}> Dashboard</button>
                            </div>
                            <div key={2}>
                                <button class="optionBtn">User Management</button>
                            </div>
                            <div key={3}>
                                <button class="optionBtn" onClick={this._onButtonClick2}>Partner Management</button>
                            </div>
                            <div key={4}>
                                <button class="optionBtn">Bank Representative Management</button>
                            </div>
                            <div key={5}>
                                <button class="optionBtn">Com Bank Branch Management</button>
                            </div>
                            <div key={6}>
                                <button class="optionBtn">SL Embassy Management</button>
                            </div>
                            <div key={7}>
                                <button class="optionBtn">Promotion Management</button>
                            </div>
                        </QueueAnim>
                    </div>

                    <div >

                        <QueueAnim delay={1500}>

                            <button key={9}><SettingsIcon class="settingsBtn2"/> Settings
                            </button>


                            <button  key={10}><ExitToAppIcon class="logoutBtn2"/> Logout
                            </button>

                        </QueueAnim>
                    </div>


                </div>
                {this.state.showComponent ?
                    <Overview/> :
                    null
                }

                {this.state.showComponent2 ?
                    <PartnerManagementnew/> :
                    null
                }
            </div>
        );
    }

}

export default Options;


//
// export default function Test() {
//
//     const [showComponent] = React.useState(false);
//
//     const click =()=> {
//         this.state = {
//             showComponent: false,
//         };
//         this._onButtonClick = this._onButtonClick.bind(this);
//     }
//
//     const _onButtonClick = () => {
//         this.setState({
//             showComponent: true,
//         });
//     }
//
//     const classes = useStyles();
//     return (
//             <div class='left_menu'>
//                <div class="top">
//
//                 <label class="user">User</label><PersonIcon  class="userIcon"/>
//
//                </div>
//
//                 <div class="middle">
//                     <hr/>
//                     <button className="menu_btn" onClick={_onButtonClick}> Dashboard</button>
//
//
//                     <button className="menu_btn">User Management</button>
//
//
//                     <button className="menu_btn">Partner Management</button>
//
//
//                     <button className="menu_btn">Bank Representative Management</button>
//
//
//                     <button className="menu_btn">Com Bank Branch Management</button>
//
//
//                     <button className="menu_btn">SL Embassy Management</button>
//
//
//                     <button className="menu_btn" onClick={<Overview/>} >Promotion Management</button>
//
//                 </div>
//
//                 <div class="bottom">
//                     <hr/>
//                     <button class="menu_btn_footer"><SettingsIcon className={classes.settingsIcon}/>   Settings</button>
//                     <button class="menu_btn_footer"><ExitToAppIcon className={classes.logoutIcon}/>   Logout</button>
//
//                 </div>
//
//             </div>
//         );
//     }



