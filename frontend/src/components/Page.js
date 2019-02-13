import React, {Component} from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router";

import Header from "./Header";
import ContactPage from "../pages/ContactPage";
import EtiquettePage from "../pages/EtiquettePage";
import SandwichMatrixPage from "../pages/SandwichMatrixPage";
import WhatPage from "../pages/WhatPage";
import WhoPage from "../pages/WhoPage";

import {ThemeProvider, createGlobalStyle} from "styled-components";
import mainTheme from "../themes/mainTheme.js";

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		font-size: 10px;
		scroll-behavior: smooth;
	}
	*, *:before, *:after {
		box-sizing: inherit;
        padding: 0;
		margin: 0;
	}
	body {
		font-size: 1.5rem;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
`;

const StyledPage = styled.div`
    /* global page styles */
    display: grid;
    box-sizing: border-box;
    font-size: 10px;
    scroll-behavior: smooth;

	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
`;

class Page extends Component {
    constructor (props) {
        super(props);
        this.state = {
            theme: mainTheme,
        }
    }
    render () {
        return (
            <ThemeProvider theme={this.state.theme}>
                <StyledPage>
                    <GlobalStyle />
                    <Header />
                    <Switch>
                        <Route path="/matrix" component={SandwichMatrixPage} />
                        <Route path="/who" component={WhoPage} />
                        <Route path="/what" component={WhatPage} />
                        <Route path="/etiquette" component={EtiquettePage} />
                        <Route path="/contact" component={ContactPage} />
                    </Switch>    
                        {this.props.children}
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;