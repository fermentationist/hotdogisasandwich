import React, {Component} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const StyledNav = styled.nav`
    display: block;
    width: 100vw;
    text-decoration: none;
    background-color: ${props => props.theme.navBackgroundColor};
    ul.nav-list {
        /* margin: 0;
        padding: 0; */
        /* min-height: 100%; */
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        /* text-decoration: none;
        list-style: none; */
    }
    li.nav-links {
        height: 100%;
        display: inline-block;
        text-align: center;
        font-family: ${props => props.theme.navLinkFont};
        font-size: ${props => props.theme.navLinkSize};
        color: ${props => props.theme.navLinkColor};
    }
    li.nav-links:not(:first-child){
        border-left: 0.02px solid gray;
    }
    .selected {
        background-color: ${props => props.theme.navLinkColor};
        color: ${props => props.theme.navBackgroundColor};
    }
    .nav-links a {
        padding: 0 20px;
    }
    
`;

const Nav = props => {
    return (
        <StyledNav>
            <ul className="nav-list">
                    <li className="nav-links"><NavLink to="/what" activeClassName="selected">what is this supposed to be?</ NavLink></li>
                    <li className="nav-links"><NavLink to="/who" activeClassName="selected">who would make such a claim?</ NavLink></li>
                    <li className="nav-links"><NavLink to="/matrix" activeClassName="selected">The Sandwich Logic Matrix</ NavLink></li>
                    <li className="nav-links"><NavLink to="/etiquette" activeClassName="selected">hot dog etiquette</ NavLink></li>
                    <li className="nav-links"><NavLink to="/contact" activeClassName="selected">contact</ NavLink></li>
                </ul>
            {props.children}
        </StyledNav>
    );
    
}

export default Nav;