import SectionWrapper from "../../containers/SectionWrapper";
import {useContext} from 'react'
import { ArrayContext } from '../../Context/HackerNewsResponseArrayContext'
import {ItemsContext} from '../../Context/HackerNewsResponseItemsContext'
import ItemsCardContainer from "../ItemsCardContainer";
import Spinner from "../Spinner";
const MainSectionMid = () => {

    const { state: arrayState } = useContext(ArrayContext);
    const { state: itemsState } = useContext(ItemsContext);
    const { loading: itemsLoading, data: itemsData, error: itemsError } = itemsState;
    const { loading: arrayLoading, data: arrayData, error: arrayError } = arrayState;

    console.log({itemsState, itemsData, itemsError, itemsLoading, arrayState, arrayLoading, arrayData, arrayError})

    const returnMainContainerBody = () => {
        if (itemsLoading === true) {
            return <Spinner />
        }
        if (itemsError.length > 0) {
            return <h1 className = "error">{ itemsError }</h1>
        }

        console.log({ itemsData, itemsError, itemsLoading })
        return <ItemsCardContainer data={ itemsData }/>
    }

    return (
        <SectionWrapper>
            {
               returnMainContainerBody()
            }
        </SectionWrapper>
    )
}

export default MainSectionMid
