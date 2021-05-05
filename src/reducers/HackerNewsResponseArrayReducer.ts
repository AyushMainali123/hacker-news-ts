import { HackerNewsItemsArray } from 'src/interfaces/HackerNewsItemsArray';
import { ResponseArrayStateInterface } from 'src/interfaces/ResponseArrayStateInterface'
import { ActionType, ResponseArrayActions } from '../actions/HackerNewsResponseArray'
import splitArrayToSmallerChuncks from '../utils/split-array'


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
            return { ...state, data: { ...state.data, totalChunks: state.data.totalChunks + 1, currentPosition: state.data.currentPosition + 1 } }
        case ActionType.RESET_DATAS:
            const initialData:HackerNewsItemsArray = {
                totalResponse: [],
                chunksArray: [],
                chunksDisplayedPerRequest: 10,
                currentPosition: 0,
                totalChunks: 0,
            }
            return {...state, error: '', data: {...initialData}, loading: true}
        default:
            return {...state}
    }
}