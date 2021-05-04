export enum ActionType {
    FETCH_SUCCESS,
    FETCH_FAILURE
}


export interface SuccessFetch {
    type: ActionType.FETCH_SUCCESS,
    payload: {data: number[]}
}


export interface ErrorFetch {
    type: ActionType.FETCH_FAILURE,
    payload: {message: string}
}

export type ResponseArrayActions = SuccessFetch | ErrorFetch