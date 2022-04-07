import Button from 'react-bootstrap/Button';
import React, { FC, useState } from'react';

import {useDispatch } from 'react-redux'
import {setAlert} from '../api/actions/alertActions'
import {getWeatherByCity, setLoading} from '../api/actions/weatherApi'

interface SearchProps{
  city: string;
}
const Search: FC<SearchProps> = ({ city}) =>{
 const dispatch = useDispatch();

  const [name, setName] =useState('');

  const handleChangeCity= (e: any) =>{
    setName(e.target.value);
  }

  const handleSubmit = (e: any) =>{
    e.preventDefault();
  
    if (name.trim() === ''){
      return dispatch(setAlert('City is Required'));
    }
    
    dispatch(setLoading());
    dispatch(getWeatherByCity(name));
    setName('');
    console.log(name);

  }

 
  return(
       <div>
      <h1>Weather</h1>
      <p>Enter your City below to see your weather.</p>
      <h1>{city}</h1>     
      <form onSubmit={handleSubmit}>
      <input
        placeholder="City"
        value={name}
        onChange={handleChangeCity}
      />
      <Button>
        Submit
      </Button>
    </form>
  <h1>{name}</h1>
      </div>
  );
}
export default Search;





