import React, {useState} from "react";

const Search = (props) => {
    const {searchMovies = Function.prototype}=props;
    const [search, setSearch] = useState("");
    const [type, setType] = useState ("");


const handleKey = (event) => {
    if(event.key === "Enter") {
        searchMovies(search, type);
    }
};

const handleFilter = (event) => {
    setType (event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
};


        
        return <div className="row">
            <div className="input-field">
                <input
                className="validate"
                placeholder="Поиск"
                type="search"
                value={search}
                onChange ={(e) => setSearch(e.target.value)}
                onKeyDown={handleKey}
                />
                <button className="btn search-btn" onClick={ ()=> searchMovies(search, type)}>Поиск</button>
                               
            </div>
            <div>
             
                <label className="radiobtn">
                <input 
                className="with-gap" 
                name="type" 
                type="radio" 
                data-type =""
                onChange={handleFilter}
                checked={type ===""}
                />
                <span>Все</span>
                </label>

                <label className="radiobtn">
                <input 
                className="with-gap" 
                name="type" 
                type="radio" 
                data-type ="movie"
                onChange={handleFilter}
                checked={type ==="movie"}
                />
                <span>Фильмы</span>
                </label>

                <label className="radiobtn">
                <input 
                className="with-gap" 
                name="type" 
                type="radio" 
                data-type ="series"
                onChange={handleFilter}
                checked={type ==="series"}
                />
                <span>Сериалы</span>
                </label>
            
            </div>
            </div>
    
}

export {Search}