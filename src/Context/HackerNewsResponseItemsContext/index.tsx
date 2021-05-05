// import React from 'react'
import React, { createContext, useReducer } from 'react'
import { ResponseArrayItemsStateInterface } from '../../interfaces/ResponseArrayItemsStateInterface'
import {ResponseItemActions} from '../../actions/HackerNewsResponseItems'
import {itemsReducer} from '../../reducers/HackerNewsItemsResponseArrayReducer'

interface IProps {
    children: React.ReactNode
}


const initialState: ResponseArrayItemsStateInterface = {
    loading: true,
    error: '',
    data: []
}


export const ItemsContext = createContext<{ state: ResponseArrayItemsStateInterface, dispatch: React.Dispatch<ResponseItemActions> }>({
    state: initialState,
    dispatch: () => undefined
})



const HackerNewsResponseItemsContext = ({children}: IProps) => {
    const [state, dispatch] = useReducer(itemsReducer, initialState);
    return (
        <ItemsContext.Provider value ={{ state, dispatch }}>
            {children}
        </ItemsContext.Provider>
    )
}

export default HackerNewsResponseItemsContext
