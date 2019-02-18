import React, {Component} from "react";
import styled from "styled-components";
import posed from "react-pose";
import Toggle from "./Toggle";


const StyledCard = styled.div`
    display: inline-block;
    width: 18em;
    height: 18em;
    border-radius: 33%;
    background-color: ivory;
    color: black;
    z-index: 2;
    box-shadow: 2px -8px 5px 0.13px rgba(33, 33, 33, 0.44);
    display: grid;
    align-content: center;
    justify-content: center;
`;

const PosedCard = posed(StyledCard)({
    front: {
        backgroundColor: "pink",
    },
    back: {
        backgroundColor: "thistle",
    }
});

const ToggleCard = Toggle(PosedCard);

class SandwichCard extends Component {
    constructor (props){
        super(props);
        this.setRef = ref => this.ref = ref;
        console.log("SandwichCard receives props: ", props)
        this.state = {
            front: true,
            name: props.name,
            imageUrl: props.imageUrl,
            linkUrl: props.linkUrl,
            linkTitle: props.linkTitle,
            description: props.description,
        }
        this.clickHandler = this.clickHandler.bind(this);
        // this.setRef = this.setRef.bind(this);
    }
    // setRef (ref){
    //     this.ref = ref;
    // }

    clickHandler (event){
        this.setState({
            front: ! this.state.front
        },
            () => console.log(this.state)
        )
    }
    render(){
        return (
            <ToggleCard pose={this.state.front ? "front" : "back"} ref={this.setRef} callback={this.clickHandler}>
                <h1>{this.state.name}</h1>
                {this.state.imageUrl ? (
                    <img src={this.state.imageUrl} />
                ) : (null)}
                <a href={this.state.linkUrl}>{this.state.linkTitle}</a>
                <p>{this.state.description}</p>
                {this.props.children}
            </ToggleCard>
        );
    }
}
export default SandwichCard;