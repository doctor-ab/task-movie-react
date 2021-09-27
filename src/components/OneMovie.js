import * as React from 'react';
import axios from "axios";
import { useState } from "react";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Chip from '@material-ui/core/Chip';




const OneMovie = (props) => {

 const [movieA, setMovieA] = useState([]);
 const prodId = props.match.params.id;
 const getMovieRequest = async () => {
   const { data } = await axios.get(
     `http://www.omdbapi.com/?i=${prodId}&apikey=358a3f00&plot=full`
   );
    
   setMovieA([data.Title, data.Country, data.Plot, data.Poster, data.imdbRating, data.Type, data.Genre]);
 };


getMovieRequest();

  return (
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="370px"
        image={movieA[3]}
        style={{ width:"290px", margin: '10px' }}
      />
      <CardContent>
      <Chip label={movieA[4]} variant="outlined" />
        <Chip label={movieA[6]} />
        
        <Typography gutterBottom variant="h5" component="div"  style={{ margin: '20px 0px' }}>
          {movieA[0]}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
           {movieA[2]}
        </Typography>
      </CardContent>

      
      <CardActions>
        <Button variant="outlined" href="/">
             Назад
        </Button>
      </CardActions>
    </Card>
  );
}

export default OneMovie;