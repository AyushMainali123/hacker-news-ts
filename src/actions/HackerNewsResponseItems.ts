import {HackerNewsResponseItem} from '../interfaces/HackerNewsResponseItem'
export enum ActionType{
    FETCH_SUCCESS,
    FETCH_FAILURE,
    RESET_DATAS
}


export interface SuccessFetch {
    type: ActionType.FETCH_SUCCESS,
    payload: {
        data: HackerNewsResponseItem[]
    }
}

export interface ErrorFetch {
    type: ActionType.FETCH_FAILURE,
    payload: {
        message: string
    }
}

export interface ResetDatas {
    type: ActionType.RESET_DATAS
}



export type ResponseItemActions = SuccessFetch | ErrorFetch | ResetDatas


