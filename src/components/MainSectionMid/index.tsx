import SectionWrapper from "../../containers/SectionWrapper";
import {useContext} from 'react'
import { ArrayContext } from '../../Context/HackerNewsResponseArrayContext'

const MainSectionMid = () => {

    const { state } = useContext(ArrayContext);
    console.log(state)
    const { loading, data } = state;

    return (
        <SectionWrapper>
            {
                loading === true ? <h1>Loading....</h1> : data.totalResponse.map((item: number) => <div key={item}>{ item }</div>)
           }
        </SectionWrapper>
    )
}

export default MainSectionMid
