import colors from "src/styles/colors";
import styled from "styled-components";
import MainSectionBottom from "../MainSectionBottom";
import MainSectionMid from "../MainSectionMid";
import MainSectionTop from "../MainSectionTop";
// import { useState, useEffect } from 'react';

const MainContainerWrapper = styled.div`
  background: ${colors.grey};
  padding-left: 15px;
  padding-right: 15px;
`;

const MainContainer = () => {
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<null | string>(null);
  // const [itemsArray, setItemsArray] = useState([]);

  return (
    <MainContainerWrapper>
      {/* Top Section */}
      <MainSectionTop />

      {/* Mid Section */}
      <MainSectionMid />

      {/* Bottom Section */}
      <MainSectionBottom />
    </MainContainerWrapper>
  );
};

export default MainContainer;
