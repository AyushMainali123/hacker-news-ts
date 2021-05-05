export enum ActionType {
    FETCH_SUCCESS,
    FETCH_FAILURE,
    INCREMENT_COUNT,
    RESET_DATAS
}


export interface SuccessFetch {
    type: ActionType.FETCH_SUCCESS,
    payload: {data: number[]}
}


export interface ErrorFetch {
    type: ActionType.FETCH_FAILURE,
    payload: {message: string}
}

export interface IncrementCount {
    type: ActionType.INCREMENT_COUNT
}

export interface ResetDatas {
    type: ActionType.RESET_DATAS
}

export type ResponseArrayActions = SuccessFetch | ErrorFetch | IncrementCount | ResetDatas