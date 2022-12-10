import axios from "axios";

export const getEntries = async (query:string):Promise<[]> => {
    return await axios
    .get(`https://api.github.com/search/repositories?q=${query}`)
    .then(result => result.data.items)
    .catch(console.log)
}