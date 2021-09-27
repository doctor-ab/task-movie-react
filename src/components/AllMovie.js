import React, { useState, useEffect } from 'react';

import MovieList from './MovieList.js'
import MovieListHeading from './MovieListHeading.js'
import SearchBox from './SearchBox.js';
import Pagination from "./Pagination.js";



import { Box } from '@material-ui/core'
const AllMovie = (props) => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [page, setPage] = useState(1);

    const getMovieRequest = async (searchValue, page) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=358a3f00&page=${page}`
    
    
        const response = await fetch(url);
        const responseJSON = await response.json();

        if (responseJSON.Search){
            setMovies(responseJSON.Search)
        }
    };

    useEffect(() => {
        if(searchValue.length > 0){
            getMovieRequest(searchValue, page);
        }else{
            getMovieRequest('Avengers', page);
        }
    }, [searchValue, page]);

	return (
		<div>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                p: 1,
                m: 1,
                color: 'white',
                bgcolor: '#316B83',
                }}
            >
                <MovieListHeading heading='Фильмы и Сериалы' />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            </Box>

            <div className='row'>
                <MovieList movies={movies}/>
                <Pagination setPage={setPage} movies={movies} />
            </div>
		</div>
	);
};

export default AllMovie;