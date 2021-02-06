export type ICar = {
  stockNumber: number,
  manufacturerName: string,
  modelName: string,
  color: string,
  mileage: {
    number: number,
    unit: string
  },
  fuelType: string,
  pictureUrl: string,
}
export type ICars = {
  cars: Array<ICar>,
  totalCarsCount: number,
  totalPageCount: number,
}
export type IColors = {
  colors: Array<string>
}
export type IManufacturer = {
  name: string,
  models: Array<{ name: string }>
}
export type IManufacturers = {
  manufacturers: Array<IManufacturer>
}

export {}