import colors from "src/styles/colors";
import styled from "styled-components";
import MainSectionBottom from "../MainSectionBottom";
import MainSectionMid from "../MainSectionMid";
import MainSectionTop from "../MainSectionTop";
import { useContext, useEffect, useState } from 'react'
import { ArrayContext } from '../../Context/HackerNewsResponseArrayContext'
import {ActionType} from '../../actions/HackerNewsResponseArray'
import axios from "src/axios";


const MainContainerWrapper = styled.div`
  background: ${colors.grey};
  padding-left: 15px;
  padding-right: 15px;
`;

const MainContainer = () => {

  const { state, dispatch } = useContext(ArrayContext)
  const [currentPage, setCurrentPage] = useState(0)
  
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
      console.log(state)
      return response;
    }

    apiCallerFunction();
    
      
  }, [currentPage])


  return (
    <MainContainerWrapper>
      {/* Top Section */}
      <MainSectionTop />

      {/* Mid Section */}
      <MainSectionMid />

      {/* Bottom Section */}
      <MainSectionBottom />
      <button onClick = {()=>setCurrentPage(prev => prev + 1)}>Click Me</button>
    </MainContainerWrapper>
  );
};

export default MainContainer;
