import  React, {createContext, useReducer} from 'react'
import {HackerNewsItemsArray} from '../../interfaces/HackerNewsItemsArray'
import {ResponseArrayStateInterface} from '../../interfaces/ResponseArrayStateInterface'
import {ResponseArrayActions} from '../../actions/HackerNewsResponseArray'
import {arrayReducer} from '../../reducers/HackerNewsResponseArrayReducer'

interface Props {
    children: React.ReactNode
}

const initialData:HackerNewsItemsArray = {
    totalResponse: [],
    chunksArray: [],
    chunksDisplayedPerRequest: 20,
    currentPosition: 0,
    totalChunks: 1,
}

const initialState: ResponseArrayStateInterface = {
    loading: true,
    error: '',
    data: initialData
}


export const ArrayContext = createContext<{ state: ResponseArrayStateInterface, dispatch: React.Dispatch<ResponseArrayActions> }>({
    state: initialState,
    dispatch: () => undefined
})



const HackerNewsResponseArrayContext = ({ children }: Props) => {
    const [state, dispatch] = useReducer(arrayReducer, initialState)
    return (
        <ArrayContext.Provider value = {{state, dispatch}}>
            {children}
        </ArrayContext.Provider>
    )
}

export default HackerNewsResponseArrayContext
