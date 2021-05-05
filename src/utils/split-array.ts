const splitArrayToSmallerChuncks = (array: number[], chunksSize: number) => {
    const arrayLength = array.length;
    var tempArray = [];
    
    for (let index = 0; index < arrayLength; index += chunksSize) {
        let chunck = array.slice(index, index+chunksSize);
        // Do something if you want with the group
        tempArray.push(chunck);
    }

    return tempArray;
}


export default splitArrayToSmallerChuncks;