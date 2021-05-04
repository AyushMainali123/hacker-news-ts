import colors from "src/styles/colors";
import styled from "styled-components";
import MainSectionBottom from "../MainSectionBottom";
import MainSectionMid from "../MainSectionMid";
import MainSectionTop from "../MainSectionTop";
import { useContext, useEffect } from 'react'
import {ArrayContext} from '../../Context/HackerNewsResponseArrayContext'


const MainContainerWrapper = styled.div`
  background: ${colors.grey};
  padding-left: 15px;
  padding-right: 15px;
`;

const MainContainer = () => {

  const { state, dispatch } = useContext(ArrayContext)
  
  useEffect(() => {
      console.log(state, dispatch)
  }, [])
  

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
