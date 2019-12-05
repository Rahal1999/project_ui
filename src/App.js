import React from 'react';
import logo from './logo.svg';
import './App.css';

import LeftMenuee from "./components/LeftMenue";
import LeftNavigationBar from "./components/LeftNavigationBar";
import Test from "./components/Test";
import PartnerManagement from "./components/PartnerManagement";
import PartnerManagementnew from "./components/PartnerManagementnew";
import Overview from "./components/Overview";

function App() {
  return (
    <div >
        <header >
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
        </header>
        <body>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </body>
     {/*<DenseAppBar/>*/}
        {/*<SwipeableTemporaryDrawer/>*/}
        {/*<LeftMenuee/>*/}
        {/*<LeftNavigationBar/>*/}

        {/*<PartnerManagement/>*/}

        <Test/>
        <PartnerManagementnew/>
        {/*<Overview/>*/}

    </div>
  );
}

export default App;
