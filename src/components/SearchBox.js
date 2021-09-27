import React from 'react';
import { TextField, styled } from '@material-ui/core'
import '../App.css';

const CssTextField = styled(TextField)({
  'input': {
      color: 'white',
  },
  '& label.Mui-focused': {
    color: '#D5BFBF',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#D5BFBF',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: '#D5BFBF',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#D5BFBF',
    },
  },
});

const SearchBox = (props) => {
    return (
        <div>
            
            <CssTextField 
                id="outlined-basic" 
                label="Поиск по названию" 
                variant="outlined"
                className="textField"
                value={props.searchValue}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Введите для поиска...'
                
                 />
            
        </div>
    );
};

export default SearchBox;