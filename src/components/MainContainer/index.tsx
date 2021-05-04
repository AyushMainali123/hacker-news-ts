import colors from "src/styles/colors";
import styled from "styled-components";
import SectionWrapper from "../../containers/SectionWrapper/index";
import Button from "../Button";
// import { useState, useEffect } from 'react';

const MainContainerWrapper = styled.div`
  background: ${colors.grey};
  padding-left: 15px;
  padding-right: 15px;
`;

const LoadMoreButton = styled(Button)`
  display: block;
  width: 100%;
  cursor: pointer;
`;

const MainContainer = () => {
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<null | string>(null);
  // const [itemsArray, setItemsArray] = useState([]);

  return (
    <MainContainerWrapper>
      {/* Top Section */}
      <SectionWrapper>This Is A Top Section</SectionWrapper>

      {/* Mid Section */}
      <SectionWrapper>This Is A Mid Section</SectionWrapper>

      {/* Bottom Section */}
      <SectionWrapper>
        <LoadMoreButton variant="standard">Load More</LoadMoreButton>
      </SectionWrapper>
    </MainContainerWrapper>
  );
};

export default MainContainer;
