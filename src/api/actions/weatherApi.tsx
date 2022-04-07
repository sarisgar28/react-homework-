
import { WeatherAction, WeatherData, WeatherError, GET_WEATHER, SET_LOADING, SET_ERROR } from "../interface";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers/combineReducer";

export const REACT_API_KEY ="your API KEY goes here." 
export const getWeatherByCity = (city: any): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ REACT_API_KEY}`);
      if(!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
      }

      const resData: WeatherData = await res.json();
      dispatch({
        type: GET_WEATHER,
        payload: resData
       });
    }catch(err: any) {
      dispatch({
        type: SET_ERROR,
        payload: err.message
      });
    }
  }
}
export const getWeatherByZipCode = (zipCode: number): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
      try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${REACT_API_KEY}`)
        if(!res.ok) {
          const resData: WeatherError = await res.json();
          throw new Error(resData.message);
        }
  
        const resData: WeatherData = await res.json();
        dispatch({
          type: GET_WEATHER,
          payload: resData
        });
      }catch(err: any) {
        dispatch({
          type: SET_ERROR,
          payload: err.message
        });
      }
    }
  }

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}





