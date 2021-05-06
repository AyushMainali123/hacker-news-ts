import SectionWrapper from "../../containers/SectionWrapper";
import styled from "styled-components";
import Button from "../Button";
import { useContext } from 'react'
import {ArrayContext} from '../../Context/HackerNewsResponseArrayContext'
import { ActionType as ArrayActionType } from "src/actions/HackerNewsResponseArray";
import { ActionType as ItemActionType } from "src/actions/HackerNewsResponseItems";
import { ItemsContext } from "src/Context/HackerNewsResponseItemsContext";
const LoadMoreButton = styled(Button)<{disabled: boolean}>`
  display: block;
  width: 100%;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
`;

const MainSectionBottom = () => {
    const { dispatch: arrayDispatch, state: arrayState } = useContext(ArrayContext);
    const {dispatch: itemsDispatch, state: itemsState} = useContext(ItemsContext)
    const handleButtonClick = () => {
        arrayDispatch({ type: ArrayActionType.INCREMENT_COUNT });
        itemsDispatch({type: ItemActionType.LOADING_START})
    }

    console.log(itemsDispatch)

    return (
        <SectionWrapper>
            {
                arrayState.data.chunksArray.length - 1 > arrayState.data.currentPosition && itemsState.data.length?
                <LoadMoreButton variant="standard" onClick={() => handleButtonClick()} disabled = {itemsState.loading}>Load More</LoadMoreButton> :
                null
            }
            
        </SectionWrapper>
    )
}

export default MainSectionBottom
