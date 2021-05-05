import SectionWrapper from "../../containers/SectionWrapper";
import {useContext} from 'react'
import { ArrayContext } from '../../Context/HackerNewsResponseArrayContext'

const MainSectionMid = () => {

    const { state } = useContext(ArrayContext);
    console.log(state)
    const { loading, data, error } = state;

    const returnMainContainerBody = () => {
        if (loading === true) {
            return <h1 className = "loading">Loading....</h1>
        }
        if (error.length > 0) {
            return <h1 className = "error">{ error }</h1>
        }
        
        const positionsArray = Array.from(Array(data.currentPosition + 1).keys())
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
