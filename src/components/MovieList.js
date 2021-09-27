import React from 'react';
import { NavLink } from 'react-router-dom'

import { ImageList, ImageListItem,ImageListItemBar } from '@material-ui/core'

const MovieList = (props) => {
	
	return (
		<div>
			<ImageList sx={{ width: 500, height: 450 }} style={{justifyContent: "space-evenly"}}>
    		  {
			  	props.movies.filter(movie => movie.Poster !== 'N/A').map((movie, index) => (
				
    		    <ImageListItem key={movie.Poster} style={{ width: "300px" ,height: "375px", margin: "1.5vw" }}>
					<NavLink to={`/movie/${movie.imdbID}`}>
    		      		<img
    		        		src={`${movie.Poster}?w=248&fit=crop&auto=format`}
    		        		srcSet={`${movie.Poster}?w=248&fit=crop&auto=format&dpr=2 2x`}
    		        		alt={movie.title}
    		        		loading="lazy"
    		      		/>
    		      		<ImageListItemBar 
				  			style={{ bottom:"0px" }}
    		        		title={movie.Title}
    		        		subtitle={<span>by: {movie.Year}</span>}
    		     
    		      		/>
					</NavLink>
    		    </ImageListItem>
				
    		  ))}
    		</ImageList>
		</div>

	


	);
};

export default MovieList;