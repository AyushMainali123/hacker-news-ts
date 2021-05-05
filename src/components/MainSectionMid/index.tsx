import SectionWrapper from "../../containers/SectionWrapper";
import {useContext} from 'react'
import { ArrayContext } from '../../Context/HackerNewsResponseArrayContext'
import {ItemsContext} from '../../Context/HackerNewsResponseItemsContext'
const MainSectionMid = () => {

    const { state: arrayState } = useContext(ArrayContext);
    const { state: itemsState } = useContext(ItemsContext);
    const { loading: itemsLoading, data: itemsData, error: itemsError } = itemsState;
    const { loading: arrayLoading, data: arrayData, error: arrayError } = arrayState;

    console.log({itemsState, itemsData, itemsError, itemsLoading, arrayState, arrayLoading, arrayData, arrayError})

    const returnMainContainerBody = () => {
        if (itemsLoading === true) {
            return <h1 className = "loading">Loading....</h1>
        }
        if (itemsError.length > 0) {
            return <h1 className = "error">{ itemsError }</h1>
        }

        console.log({itemsData, itemsError, itemsLoading})
        const dataToBeReturned = itemsData.map(data => <div key={data.id}>{data.by}</div>)
        return [
            ...dataToBeReturned,
        ]
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
