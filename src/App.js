import { useState } from 'react';
import ImageList from "./components/ImageList";
import SearchBar from "./components/SeachBar";
import getImages from "./api";


function App() {
    const [images, setImages] = useState([]);

    const requestImages = async (searchTerm) => {
        const response = await getImages(searchTerm);
        setImages(response);
    }


    return (
        <div >
            <SearchBar getSearchTerm={requestImages} />
            <ImageList images={images} />
        </div>);
}

export default App;