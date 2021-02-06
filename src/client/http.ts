import axios from 'axios';
import { ICars, ICar, IColors, IManufacturers } from 'types/types';

const baseUrl = 'https://auto1-mock-server.herokuapp.com/'
const apiVersion = 'api/'
const requestUrl = baseUrl + apiVersion

export const getCars = (manufacturer = '', color = '', sort = 'asc', page = 0) => { 
  return axios.get<ICars>(requestUrl + 'cars')
  .then((res) => {
    return res.data.cars;
  })
}

export const getCar = (stockNumber: number) => { 
  return axios.get<{ car: ICar }>(requestUrl + `cars/${stockNumber}`)
  .then((res) => {
    return res.data.car;
  })
}

export const getColors = () => { 
  return axios.get<IColors>(requestUrl + 'colors')
  .then((res) => {
    return res.data.colors;
  })
}

export const getManufacturers = () => { 
  return axios.get<IManufacturers>(requestUrl + 'manufacturers')
  .then((res) => {
    return res.data.manufacturers;
  })
}

