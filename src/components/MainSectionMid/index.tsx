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

        // // returns total Number of data to be returned
        // const positionsArray = Array.from(Array(arrayData.totalChunks).keys())

        // // Final Array data that is returned
        // const dataToBeReturned = positionsArray.map(position => arrayData.chunksArray[position].map((item: number) => <div key={item} className="data">{item}</div>))
        console.log({itemsData, itemsError, itemsLoading})
        const dataToBeReturned = itemsData.map(data => <div key={data.id}>{data.by}</div>)
        return [
            ...dataToBeReturned,
        ]
    }

    // const returnMainContainerBody = () => {
    //     console.log(loading, itemsData, itemsError);
    //     return <div>Hi</div>
    // }


    return (
        <SectionWrapper>
            {
               returnMainContainerBody()
            }
        </SectionWrapper>
    )
}

export default MainSectionMid
