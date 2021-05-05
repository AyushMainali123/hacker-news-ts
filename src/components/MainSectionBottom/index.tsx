import SectionWrapper from "../../containers/SectionWrapper";
import styled from "styled-components";
import Button from "../Button";
import { useContext } from 'react'
import {ArrayContext} from '../../Context/HackerNewsResponseArrayContext'
import { ActionType } from "src/actions/HackerNewsResponseArray";
import { ItemsContext } from "src/Context/HackerNewsResponseItemsContext";
const LoadMoreButton = styled(Button)`
  display: block;
  width: 100%;
`;

const MainSectionBottom = () => {
    const { dispatch: arrayDispatch, state: arrayState } = useContext(ArrayContext);
    const {dispatch: itemsDispatch, state: itemsState} = useContext(ItemsContext)
    const handleButtonClick = () => {
        arrayDispatch({type: ActionType.INCREMENT_COUNT});
    }

    console.log(itemsDispatch)

    return (
        <SectionWrapper>
            {
                arrayState.data.chunksArray.length - 1 > arrayState.data.currentPosition && itemsState.data.length?
                <LoadMoreButton variant="standard" onClick={() => handleButtonClick()}>Load More</LoadMoreButton> :
                null
            }
            
        </SectionWrapper>
    )
}

export default MainSectionBottom
