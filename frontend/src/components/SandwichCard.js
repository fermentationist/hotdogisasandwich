import React, {Component} from "react";
import styled from "styled-components";
import posed from "react-pose";
import Toggle from "./Toggle";

const StyledCard = styled.div`
    display: inline-block;
    border-radius: 0.5%;
    background-color: ivory;
    color: black;
    z-index: 2;
    box-shadow: 2px -8px 5px 0.13px rgba(33, 33, 33, 0.44);
    &:after {
        content: "this";
        color: red;
        background-color: gray;
    }
`;

const PosedCard = posed(StyledCard)({
    front: {
        backgroundColor: "pink",
    },
    back: {
        backgroundColor: "thistle",
        transform: "translate3d(42px, -62px, -135px)",
    }
});

const ToggleCard = Toggle(PosedCard);

class SandwichCard extends Component {
    constructor (props){
        super(props);
        this.state = {
            front: true,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (event){
        this.setState({
            front: ! this.state.front
        },
            () => console.log(this.state)
        )
    }
    render(){
        return (
            <ToggleCard pose={this.state.front ? "front" : "back"} callback={this.handleClick}>
                {this.props.children}
            </ToggleCard>
        );
    }
}
export default SandwichCard;