import React from 'react';
import './style.css';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import Overview from "./Overview";





class Test extends React.Component{



    render(){
        return(
            <div class='left_menu'>
               <div class="top">

                <label class="user">User</label><PersonIcon />

               </div>

                <div class="middle">
                    <hr/>
                    <button className="menu_btn"> Dashboard</button>


                    <button className="menu_btn">User Management</button>


                    <button className="menu_btn">Partner Management</button>


                    <button className="menu_btn">Bank Representative Management</button>


                    <button className="menu_btn">Com Bank Branch Management</button>


                    <button className="menu_btn">SL Embassy Management</button>


                    <button className="menu_btn" onClick={<Overview/>} >Promotion Management</button>
                </div>

                <div class="bottom">
                    <hr/>
                    <button class="menu_btn_footer">Settings</button>
                    <button class="menu_btn_footer">Logout</button>

                </div>
            </div>
        );
    }
}

export default Test;
