import React, {useState, useEffect} from "react";
import {Movies} from "../component/Movies";
import {Preloader} from "../component/preloader";
import {Search} from "../component/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main () {

    const [movies, setMovies] = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect( ()=>{
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
    .then (response => response.json())
    .then ((data) =>{
        setLoading(false);
        setMovies(data.Search)
    })
    .catch ((err) => {
        console.error(err);
        setLoading(false)
    })
    }, [])


const searchMovies = (str, type = "") => {
    setLoading(true)
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !=="" ? `&type=${type}` : ""}`)
    .then (response => response.json())
    .then ((data) =>{
        setLoading(false);
        setMovies(data.Search)
    })
    .catch ((err) => {
        console.error(err);
        setLoading(false)
    })
    }

 
    return <main className="container content">
        <Search searchMovies={searchMovies}/>
        {loading ? <Preloader /> : <Movies movies={movies}/>}
    </main>

}


export {Main}