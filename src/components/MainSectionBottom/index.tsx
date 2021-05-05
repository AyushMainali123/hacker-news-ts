import SectionWrapper from "../../containers/SectionWrapper";
import styled from "styled-components";
import Button from "../Button";
import { useContext } from 'react'
import {ArrayContext} from '../../Context/HackerNewsResponseArrayContext'
import { ActionType } from "src/actions/HackerNewsResponseArray";
const LoadMoreButton = styled(Button)`
  display: block;
  width: 100%;
`;

const MainSectionBottom = () => {
    const { dispatch } = useContext(ArrayContext);

    const handleButtonClick = () => {
        dispatch({type: ActionType.INCREMENT_COUNT});
    }

    return (
        <SectionWrapper>
            <LoadMoreButton variant="standard" onClick = {()=>handleButtonClick()}>Load More</LoadMoreButton>
        </SectionWrapper>
    )
}

export default MainSectionBottom
