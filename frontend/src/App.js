import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Page from "./components/Page";
import Header from "./components/Header";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Page>
                    </Page>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
