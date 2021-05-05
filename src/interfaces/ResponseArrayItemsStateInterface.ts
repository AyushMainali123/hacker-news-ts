import { HackerNewsResponseItem } from "./HackerNewsResponseItem";

export interface ResponseArrayItemsStateInterface{
    loading: boolean,
    error: string,
    data: HackerNewsResponseItem[]
}