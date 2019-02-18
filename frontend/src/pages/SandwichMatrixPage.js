import React from "react";
import SandwichCard from "../components/SandwichCard";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: grid;
    align-content: space-around;
    justify-content: space-evenly;
    grid-template-columns: auto auto auto;
`;

const SandwichMatrixPage = props => {
    return (
        <React.Fragment>
            <h1>Sandwich Matrix page</h1>
            <StyledDiv>
                {
                    Array(20).fill(0).map((x, i) => {
                        return (
                            <SandwichCard>
                                test card {i}
                            </SandwichCard>
                        );
                    })
                }
            </StyledDiv>

        </React.Fragment>
    )
}

export default SandwichMatrixPage;