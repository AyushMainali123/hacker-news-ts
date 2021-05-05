import SectionWrapper from "../../containers/SectionWrapper";
import {useContext} from 'react'
import { ArrayContext } from '../../Context/HackerNewsResponseArrayContext'

const MainSectionMid = () => {

    const { state } = useContext(ArrayContext);
    const { loading, data, error } = state;
    console.log({state})
    const returnMainContainerBody = () => {
        if (loading === true) {
            return <h1 className = "loading">Loading....</h1>
        }
        if (error.length > 0) {
            return <h1 className = "error">{ error }</h1>
        }

        // returns total Number of data to be returned
        const positionsArray = Array.from(Array(data.totalChunks).keys())

        // Final Array data that is returned
        const dataToBeReturned = positionsArray.map(position => data.chunksArray[position].map((item: number) => <div key={item} className="data">{item}</div>))        
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
