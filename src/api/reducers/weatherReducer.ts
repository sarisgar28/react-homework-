// Created Weather reducer and alert reducer

import {  WeatherAction, SET_ERROR,GET_WEATHER, SET_LOADING, WeatherState } from "../interface";

export const intialState: WeatherState = {
    data: null,
    loading: false,
    error: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = intialState, action: WeatherAction): WeatherState => {
    switch(action.type){
        case GET_WEATHER:
            return {
                data: action.payload,
                loading: false,
                error: ''
            }
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        case   SET_ERROR: 
            return {
            ...state,
            error: action.payload,
            loading: false
        }
        default: 
        return state;
            
    }
}