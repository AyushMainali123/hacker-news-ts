import SectionWrapper from "../../containers/SectionWrapper";
import Button from "../Button";
import styled from 'styled-components'


const StyledSectionWrapper = styled(SectionWrapper)`
    display: flex;
    gap: 7px;
`

const MainSectionTop = () => {
    return (
        <StyledSectionWrapper>
            <Button variant="pill">New</Button>
            <Button variant="pill" selected={false}>Past</Button>
        </StyledSectionWrapper>
    )
}

export default MainSectionTop
