import {ActionType, ResponseItemActions} from '../actions/HackerNewsResponseItems'
import { ResponseArrayItemsStateInterface } from '../interfaces/ResponseArrayItemsStateInterface'


export const itemsReducer = (state: ResponseArrayItemsStateInterface, action: ResponseItemActions): ResponseArrayItemsStateInterface => {
    switch (action.type) {
        case ActionType.FETCH_SUCCESS:
            const finalDataToBeReturned = action.payload.data.filter(data => {
              return !state.data.some(({id}) => id === data.id)
            })
            return {...state, data: [...state.data, ...finalDataToBeReturned], loading: false}
        case ActionType.FETCH_FAILURE:
            return { ...state, loading: false, error: action.payload.message }
        case ActionType.RESET_DATAS:
            return { ...state, loading: true, error: '', data: [] }
        case ActionType.LOADING_START:
            return {...state, loading: true}
        default:
            return {...state}
    }
}