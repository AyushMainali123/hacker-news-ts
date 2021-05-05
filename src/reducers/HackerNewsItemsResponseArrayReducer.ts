import {ResponseItemActions} from '../actions/HackerNewsResponseItems'
import { ResponseArrayItemsStateInterface } from '../interfaces/ResponseArrayItemsStateInterface'


export const itemsReducer = (state: ResponseArrayItemsStateInterface, action: ResponseItemActions) => {
    switch (action.type) {
        default:
            return {...state}
    }
}