import SectionWrapper from "../../containers/SectionWrapper";
import Button from "../Button";
import styled from 'styled-components'
import {useState} from "react";


type ActiveValueTypes = "New" | "Past"

const StyledSectionWrapper = styled(SectionWrapper)`
    display: flex;
    gap: 7px;
`

const MainSectionTop = () => {

    const [activeValue, setActiveValue] = useState<ActiveValueTypes>("New");
    
    const handleButtonClick = (value: ActiveValueTypes) => {
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
