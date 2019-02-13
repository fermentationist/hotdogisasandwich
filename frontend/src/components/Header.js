import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

const StyledHeader = styled.header`
    display: grid;
    grid-auto-rows: auto;
    background-color: ${props => props.theme.headerBackgroundColor};
    font-family: ${props => props.theme.headerTitleFont};
    font-size: ${props => props.theme.headerTitleSize};
    color: ${props => props.theme.headerTitleColor};
    text-align: center;
`;

const Header = props => {
    return (
        <StyledHeader>
            hotdogisasandwich under construction HEADER
            <Nav />
            {props.children}
        </StyledHeader>
    );
}

export default Header;