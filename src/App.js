import React from 'react';
import logo from './logo.svg';
import './App.css';

import PartnerManagementnew from "./components/PartnerManagementnew";
import Sidebar from "./components/LeftNavigationBar";
import Test from "./components/Test";
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

        <Sidebar/>
            {/*<Test/>*/}
            <PartnerManagementnew/>

{/*<Overview/>*/}
    </div>
  );
}

export default App;
