import axios from 'axios';
import { ICars, ICar, IColors, IManufacturers } from 'types/types';

const baseUrl = 'https://auto1-mock-server.herokuapp.com/'
const apiVersion = 'api/'
const requestUrl = baseUrl + apiVersion

const instance = axios.create({
  baseURL: requestUrl,
});

export const getCars = (manufacturer = '', color = '', sort = 'asc', page = 1) => { 
  return instance.get<ICars>('cars', { 
    params: {
      manufacturer,
      color,
      sort,
      page,
    }
  }).then((res) => {
    return res.data;
  })
}

export const getCar = (stockNumber: number) => { 
  return instance.get<{ car: ICar }>(`cars/${stockNumber}`)
  .then((res) => {
    return res.data.car;
  })
}

export const getColors = () => { 
  return instance.get<IColors>('colors')
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

