import Button from 'react-bootstrap/Button';
import { FC, useState } from'react';


import {useDispatch } from 'react-redux'
import {setAlert} from '../api/actions/alertActions'
import {getWeatherByCity, setLoading} from '../api/actions/weatherApi'

interface SearchProps{
  city: string;
}
const Search: FC<SearchProps> = ({ city}) =>{
 const dispatch = useDispatch<any>();

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

       <div className="search-container">
      <h1>Weather</h1>
      <p>Enter your City below to see your weather.</p>
      <form>
      <input
        placeholder="City"
        value={name}
        onChange={handleChangeCity}
      />
      <Button onClick={handleSubmit}>
        Submit
      </Button>
    </form>
      <h1>{name}</h1>
      </div>
  );
}
export default Search;





