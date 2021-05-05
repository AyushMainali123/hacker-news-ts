import colors from "src/styles/colors";
import styled from "styled-components";
import MainSectionBottom from "../MainSectionBottom";
import MainSectionMid from "../MainSectionMid";
import MainSectionTop from "../MainSectionTop";
import {useState,  useContext, useEffect} from 'react'
import { ArrayContext } from '../../Context/HackerNewsResponseArrayContext'
import { ActionType as ArrayActionType } from '../../actions/HackerNewsResponseArray'
import { ActionType as ItemActionType } from '../../actions//HackerNewsResponseItems'
import {ItemsContext} from '../../Context/HackerNewsResponseItemsContext'
import axios from "src/axios";
import {fetchHackerAPIItemsFromID} from 'src/utils/fetch-items-from-id'

const MainContainerWrapper = styled.div`
  background: ${colors.white};
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: inset 0px 3px 8px rgba(0, 0, 0, 0.08);
`;

type ActiveValueTypes = "New" | "Past"

const MainContainer = () => {
  const [activeValue, setActiveValue] = useState<ActiveValueTypes>("New");
  const {  dispatch: arrayDispatch, state: arrayState } = useContext(ArrayContext)
  const { dispatch: itemsDispatch, state: itemsState } = useContext(ItemsContext)
  

  // For Array of Ids
  useEffect(() => {
    const getHackerRankResponseArray = async (url: string) => {
      try {
        const responseArray = await axios(url)
        // When Successfully Fetched From Server
        arrayDispatch({
          type: ArrayActionType.FETCH_SUCCESS,
          payload: responseArray
        })
        return responseArray;
      }
      catch (error) {

        // When Fetching is not successful
        arrayDispatch({
          type: ArrayActionType.FETCH_FAILURE,
          payload: {
            message: error.message
          }
          })        
      }
    }

    const apiCallerFunction = async () => {
      const response = await getHackerRankResponseArray('/topstories.json?print=pretty')    
      return response;
    }
    apiCallerFunction();
    
      
  }, [arrayDispatch, itemsDispatch])

  // Getting Items from each Array
  useEffect(() => {
    const itemsApiCallerFunction = async () => {
      if (arrayState.data.totalResponse.length > 0) {
        const promisesArray = arrayState.data.chunksArray[0].map((id: number) => fetchHackerAPIItemsFromID(id))
        const resolvedResponse = await Promise.all(promisesArray);
        const dataToBeDispatched = resolvedResponse.map(response => response.data)
        console.log(dataToBeDispatched);
        itemsDispatch({
          type: ItemActionType.FETCH_SUCCESS,
          payload: {
            data: dataToBeDispatched
          }
        })
        console.log(itemsState, arrayState);
    }
  }
    itemsApiCallerFunction()
  }, [arrayState])

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
