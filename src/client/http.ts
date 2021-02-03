import axios, {AxiosInstance, AxiosResponse, Method, CancelToken, ResponseType} from 'axios';

const baseUrl = 'https://auto1-mock-server.herokuapp.com/'

interface ICar {
  stockNumber: number,
  manufacturerName: string,
  modelName: string,
  color: string,
  mileage: {
    number: number,
    unit: string
  },
  fuelType: string,
  pictureUrl: string
}

interface IList {
  cars: Array<ICar>,
  totalCarsCount: number,
  totalPageCount: number
}

// export function getList(): Promise<AxiosResponse<IList>> {
//   return axios.get(baseUrl + 'api/cars')
//     .then((res) => {
//       return res.data.cars;
//     }).catch(() => {
//       console.log('ERROR on getList')
//     });
// }

export const getList = () => { 
  return axios.get<IList>(baseUrl + 'api/cars')
  .then((res) => {
    return res.data.cars;
  })
}