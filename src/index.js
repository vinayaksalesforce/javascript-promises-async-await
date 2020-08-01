const movies = require("./data/movies.json")
import {fetchWithTimeout} from './services.js'

export function fetchMovies(){
    const resolveFunction = () => movies;
    return fetchWithTimeout(1000).then(resolveFunction);
}

var moviePromise = fetchMovies();

moviePromise.then(result => console.log(result));