import { ResponseArrayStateInterface } from 'src/interfaces/ResponseArrayStateInterface'
import { ActionType, ResponseArrayActions } from '../actions/HackerNewsResponseArray'


const splitArrayToSmallerChuncks = (array: number[], chunksSize: number) => {
    const arrayLength = array.length;
    var tempArray = [];
    
    for (let index = 0; index < arrayLength; index += chunksSize) {
        let chunck = array.slice(index, index+chunksSize);
        // Do something if you want with the group
        tempArray.push(chunck);
    }

    return tempArray;
}



export const arrayReducer = (state: ResponseArrayStateInterface, action: ResponseArrayActions): ResponseArrayStateInterface => {
    switch (action.type) {
        case ActionType.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: {
                    ...state.data,
                    totalResponse: action.payload.data,
                    totalChunks: 1,
                    currentPosition: 0,
                    chunksArray: splitArrayToSmallerChuncks(action.payload.data, state.data.chunksDisplayedPerRequest)
                }
            }
        case ActionType.FETCH_FAILURE:
            return { ...state, loading: false, error: action.payload.message }
        case ActionType.INCREMENT_COUNT:
            return {...state, data: {...state.data, totalChunks: state.data.totalChunks + 1, currentPosition: state.data.currentPosition + 1}}
        default:
            return {...state}
    }
}