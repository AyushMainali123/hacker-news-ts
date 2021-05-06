import SectionWrapper from "../../containers/SectionWrapper";
import {useContext} from 'react'
import { ArrayContext } from '../../Context/HackerNewsResponseArrayContext'
import {ItemsContext} from '../../Context/HackerNewsResponseItemsContext'
import ItemsCardContainer from "../ItemsCardContainer";
import Spinner from "../Spinner";
import styled from 'styled-components'


const StyledSectionWrapper = styled(SectionWrapper)`

`



const MainSectionMid = () => {

    const { state: arrayState } = useContext(ArrayContext);
    const { state: itemsState } = useContext(ItemsContext);
    const { loading: itemsLoading, data: itemsData, error: itemsError } = itemsState;
    const { loading: arrayLoading, data: arrayData, error: arrayError } = arrayState;

    console.log({itemsState, itemsData, itemsError, itemsLoading, arrayState, arrayLoading, arrayData, arrayError})

    const returnMainContainerBody = () => {
        if (itemsError.length > 0) {
            return <h1 className = "error">{ itemsError }</h1>
        }

        if (itemsData.length > 0) {
            return <ItemsCardContainer data={ itemsData }/>
        }
        
        return null;
    
    }

    return (
        <StyledSectionWrapper>
            {
                returnMainContainerBody()
            }
            {
                itemsLoading && <Spinner />
            }
        </StyledSectionWrapper>
    )
}

export default MainSectionMid
