export interface HackerNewsItemsArray {
    totalResponse: number[],
    currentPosition: number,
    totalChunks: number,
    chunksArray: number[][],
    chunksDisplayedPerRequest: number
}