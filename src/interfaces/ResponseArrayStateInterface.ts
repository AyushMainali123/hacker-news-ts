import {HackerNewsItemsArray} from './HackerNewsItemsArray'

export interface ResponseArrayStateInterface {
    loading: boolean,
    error: string,
    data: HackerNewsItemsArray
}