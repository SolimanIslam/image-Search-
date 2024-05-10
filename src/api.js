import axios from "axios";
import env from 'dotenv';

env.config();

const url = "https://api.unsplash.com/search/photos";
const accessKey = process.env.ACCESS_KEY;

 const getImages = async(searchTerm)=> {
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization:  accessKey
            },
            params: {
                query: searchTerm
            }
            
        });
        console.log(response.data.results);
        return response.data.results;


    } catch (error) {
        console.error('Error:', error);
    }
 };

 export default getImages;