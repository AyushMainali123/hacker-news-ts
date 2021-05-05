import SectionWrapper from "../../containers/SectionWrapper";
import Button from "../Button";
import styled from 'styled-components'
import { useContext} from "react";
import axios from "src/axios";
import { ArrayContext } from '../../Context/HackerNewsResponseArrayContext'
import { ActionType as ArrayActionType } from '../../actions/HackerNewsResponseArray'
import {ActionType as ItemsActionType} from '../../actions/HackerNewsResponseItems'
import { ItemsContext } from "src/Context/HackerNewsResponseItemsContext";

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

    const {dispatch: arrayDispatch} = useContext(ArrayContext)
    const {dispatch: itemsDispatch} = useContext(ItemsContext)
    const handleButtonClick = (value: ActiveValueTypes) => {

        // Resseting All Datas to initial Values
        arrayDispatch({
            type: ArrayActionType.RESET_DATAS
        })
        itemsDispatch({
            type: ItemsActionType.RESET_DATAS
        })
        const apiCallFunction = async () => {
            try {
                const responseArray = await axios('/newstories.json?print=pretty')
                if (value === "New") {
                    // For Re rendering all datas
                    arrayDispatch({
                        type: ArrayActionType.FETCH_SUCCESS,
                        payload: responseArray
                    })
                    return;
                }
                
                if (value === "Past") {
                     // For Re rendering all datas
                    const reverseArrayResponse = {data: responseArray.data.reverse()};
                    console.log({reverseArrayResponse});
                    arrayDispatch({
                        type: ArrayActionType.FETCH_SUCCESS,
                        payload: reverseArrayResponse
                    })
                    return;
                }
                
            }
            catch (error) {
                arrayDispatch({
                    type: ArrayActionType.FETCH_FAILURE,
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
