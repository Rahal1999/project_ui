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
