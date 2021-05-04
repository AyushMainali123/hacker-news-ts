import { ResponseArrayStateInterface } from 'src/interfaces/ResponseArrayStateInterface'
import { ActionType, ResponseArrayActions } from '../actions/HackerNewsResponseArray'


export const arrayReducer = (state: ResponseArrayStateInterface, action: ResponseArrayActions): ResponseArrayStateInterface => {
    switch (action.type) {
        case ActionType.FETCH_SUCCESS:
            return {...state, loading: false, data: {...state.data, totalResponse: action.payload.data}}
        case ActionType.FETCH_FAILURE:
            return { ...state, loading: false, error: action.payload.message }
        default:
            return {...state}
    }
}