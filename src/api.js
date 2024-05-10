import axios from "axios";
// import env from 'dotenv';

// env.config();

const url = "https://api.unsplash.com/search/photos";
const accessKey = "Client-ID DAKyGTGIBQDx2_UZ_lqEi-h9C6_qTsVtddzPT5350VQ";
// process.env.ACCESS_KEY;

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