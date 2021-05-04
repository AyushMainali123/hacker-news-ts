import SectionWrapper from "../../containers/SectionWrapper";
import styled from "styled-components";
import Button from "../Button";

const LoadMoreButton = styled(Button)`
  display: block;
  width: 100%;
`;

const MainSectionBottom = () => {
    return (
        <SectionWrapper>
            <LoadMoreButton variant="standard">Load More</LoadMoreButton>
        </SectionWrapper>
    )
}

export default MainSectionBottom
