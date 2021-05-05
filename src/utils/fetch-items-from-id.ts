import axios from "src/axios";

export const fetchHackerAPIItemsFromID = async (id: number) => {
    const result = await axios(`/item/${id}.json`);
    return result;
}
