import SectionWrapper from "../../containers/SectionWrapper";
import Button from "../Button";
import styled from 'styled-components'
import { useContext} from "react";
import axios from "src/axios";
import { ArrayContext } from '../../Context/HackerNewsResponseArrayContext'
import {ActionType} from '../../actions/HackerNewsResponseArray'

type ActiveValueTypes = "New" | "Past"

const StyledSectionWrapper = styled(SectionWrapper)`
    display: flex;
    gap: 7px;
`

interface PropsInterface {
    activeValue: ActiveValueTypes,
    setActiveValue: ((value: ActiveValueTypes) => void);
}


const MainSectionTop = ({activeValue, setActiveValue}: PropsInterface) => {

    const {dispatch} = useContext(ArrayContext)
    
    const handleButtonClick = (value: ActiveValueTypes) => {

        // Resseting All Datas 
        dispatch({
            type: ActionType.RESET_DATAS
        })
        const apiCallFunction = async () => {
            try {
                const responseArray = await axios('/topstories.json?print=pretty')
                if (value === "New") {
                    // For Re rendering all datas
                    dispatch({
                        type: ActionType.FETCH_SUCCESS,
                        payload: responseArray
                    })
                    return;
                }
                
                if (value === "Past") {
                     // For Re rendering all datas
                    dispatch({
                        type: ActionType.FETCH_SUCCESS,
                        payload: responseArray
                    })
                    return;
                }
                
            }
            catch (error) {
                dispatch({
                    type: ActionType.FETCH_FAILURE,
                    payload: {
                        message: error.message
                    }
                })
            }
           
        }
        apiCallFunction()
        setActiveValue(value)
    }

    return (
        <StyledSectionWrapper>
            <Button variant="pill" selected={activeValue === "New"} onClick = {()=>handleButtonClick("New")}>New</Button>
            <Button variant="pill" selected={activeValue === "Past"} onClick = {()=>handleButtonClick("Past")}>Past</Button>
        </StyledSectionWrapper>
    )
}

export default MainSectionTop
