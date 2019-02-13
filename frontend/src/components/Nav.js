import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 100vw;
    text-decoration: none;
    ul.nav-list {
        display: flex;
        flex-direction: row;
        align-content: space-around;
        justify-content: space-around;
        text-decoration: none;
        list-style: none;
    }
    li.nav-links {
        display: inline-block;
        text-align: center;
        font-family: ${props => props.theme.navLinkFont};
        font-size: ${props => props.theme.navLinkSize};
        color: ${props => props.theme.navLinkColor};
    }
`;

const Nav = props => {
    return (
        <StyledNav>
            <ul className="nav-list">
                    <li className="nav-links"><a href="/what">what is this supposed to be?</a></li>
                    <li className="nav-links"><a href="/who">who would make such a claim?</a></li>
                    <li className="nav-links"><a href="/matrix">The Sandwich Logic Matrix</a></li>
                    <li className="nav-links"><a href="/etiquette">hot dog etiquette</a></li>
                    <li className="nav-links"><a href="/contact">contact</a></li>
                </ul>
            {props.children}
        </StyledNav>
    );
}

export default Nav;