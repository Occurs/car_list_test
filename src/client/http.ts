import axios from 'axios';
import { ICars, IColors, IManufacturers } from 'types/types';

const baseUrl = 'https://auto1-mock-server.herokuapp.com/'
const apiVersion = 'api/'
const requestUrl = baseUrl + apiVersion

export const getList = (manufacturer = '', color = '', sort = 'asc', page = 0) => { 
  return axios.get<ICars>(requestUrl + 'cars')
  .then((res) => {
    return res.data.cars;
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

