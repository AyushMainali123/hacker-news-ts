import colors from "src/styles/colors";
import styled from "styled-components";
import MainSectionBottom from "../MainSectionBottom";
import MainSectionMid from "../MainSectionMid";
import MainSectionTop from "../MainSectionTop";
import {useState,  useContext, useEffect} from 'react'
import { ArrayContext } from '../../Context/HackerNewsResponseArrayContext'
import { ActionType } from '../../actions/HackerNewsResponseArray'
import {ItemsContext} from '../../Context/HackerNewsResponseItemsContext'
import axios from "src/axios";


const MainContainerWrapper = styled.div`
  background: ${colors.white};
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: inset 0px 3px 8px rgba(0, 0, 0, 0.08);
`;

type ActiveValueTypes = "New" | "Past"

const MainContainer = () => {
  const [activeValue, setActiveValue] = useState<ActiveValueTypes>("New");
  const {  dispatch: arrayDispatch } = useContext(ArrayContext)
  const { dispatch: itemsDispatch } = useContext(ItemsContext)
  
  useEffect(() => {
    console.log(itemsDispatch)
    const getHackerRankResponseArray = async (url: string) => {
      try {
        const responseArray = await axios(url)

        // When Successfully Fetched From Server
        arrayDispatch({
          type: ActionType.FETCH_SUCCESS,
          payload: responseArray
        })
        return responseArray;
      }
      catch (error) {

        // When Fetching is not successful
        arrayDispatch({
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
    
      
  }, [arrayDispatch])



  return (
    <MainContainerWrapper>
      {/* Top Section */}
      <MainSectionTop activeValue={activeValue} setActiveValue={ setActiveValue }/>

      {/* Mid Section */}
      <MainSectionMid />

      {/* Bottom Section */}
      <MainSectionBottom />
    </MainContainerWrapper>
  );
};

export default MainContainer;
