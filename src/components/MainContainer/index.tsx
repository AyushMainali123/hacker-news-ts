import colors from "src/styles/colors";
import styled from "styled-components";
import MainSectionBottom from "../MainSectionBottom";
import MainSectionMid from "../MainSectionMid";
import MainSectionTop from "../MainSectionTop";
import { useContext, useEffect} from 'react'
import { ArrayContext } from '../../Context/HackerNewsResponseArrayContext'
import {ActionType} from '../../actions/HackerNewsResponseArray'
import axios from "src/axios";


const MainContainerWrapper = styled.div`
  background: ${colors.white};
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: inset 0px 3px 8px rgba(0, 0, 0, 0.08);
`;

const MainContainer = () => {

  const {  dispatch } = useContext(ArrayContext)
  
  useEffect(() => {
    console.log(ActionType)
    const getHackerRankResponseArray = async (url: string) => {
      try {
        const responseArray = await axios(url)

        // When Successfully Fetched From Server
        dispatch({
          type: ActionType.FETCH_SUCCESS,
          payload: responseArray
        })
        return responseArray;
      }
      catch (error) {

        // When Fetching is not successful
        dispatch({
          type: ActionType.FETCH_FAILURE,
          payload: {
            message: error.message
          }
          })        
      }
    }

    const apiCallerFunction = async() => {
      const response = await getHackerRankResponseArray('/topstories.json?print=pretty')
      return response;
    }

    apiCallerFunction();
    
      
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
