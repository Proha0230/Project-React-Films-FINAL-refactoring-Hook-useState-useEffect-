import { Movie } from "./Movie";

function Movies (props) {
    const{movies=[]} = props;

    return <div className="movies">
        {movies.length ? movies.map (movie => (
            < Movie key = {movie.ImdbID}{...movie}/>
        )) : <h4 className="TextnotFound">Ничего не найдено :( </h4>}
    </div>
}

export {Movies}