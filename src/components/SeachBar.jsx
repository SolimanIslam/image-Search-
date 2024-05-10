import { useState } from "react";
import "../style/SearchBar.css";

function SearchBar({getSearchTerm}) {
    const [searchTerm, setSearchTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        getSearchTerm(searchTerm);
        setSearchTerm('');
    };

    const onInputChange = (event) => { 
        const {value} = event.target;  
        setSearchTerm(value);
    };

    return (<div>
        <form className="searchBar" onSubmit={onFormSubmit}>

            <label for="searchTerm">Image Search</label>
            <input 
            type="text" 
            id="searchTerm" 
            name="searchTerm" 
            onChange={onInputChange} 
            value={searchTerm} />
        </form>
    </div>);
}

export default SearchBar;