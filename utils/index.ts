import { CarCardProps, CustomFilterProps, FilterProps } from "@/types"
import { url } from "inspector"

export async function fetchCars(filters: FilterProps) {
	// деструктурізація фільтрііівв
	const { manufactor, year, model, limit, fuel } = filters
	const headers = {
		'X-RapidAPI-Key': '410525c9b8mshd9a07436e30746ep1afad5jsna21534673b17',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
	const responce = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufactor}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {headers: headers})
	const result = await responce.json()

	return result
}

export const calculateCarRent = (city_mpg:number, year:number) => {
	const basePricePerDay = 50
	const mileageFactor = 0.1
	const ageFactor = 0.05
	const mileageRate = city_mpg * mileageFactor
	const ageRate = (new Date().getFullYear() - year) * ageFactor
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate
	return rentalRatePerDay.toFixed(0)
}

export const generateCarImageURL = (car: CarCardProps, angle?: string) => {
	const url = new URL("https://cdn.imagin.studio/getimage")
	const { make, model, year } = car
	url.searchParams.append('customer', 'hrjavascript-mastery')
	url.searchParams.append('make', make)
	url.searchParams.append('modelFamily', model.split(" ")[0])
	url.searchParams.append('zoomType', 'fullscreen')
	url.searchParams.append('modelYear', `${year}`)
	url.searchParams.append('angle', `${angle}`)

	return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
	const searchParams = new URLSearchParams(window.location.search)
	searchParams.set(type, value)

	const newPathName = `${window.location.pathname}?${searchParams.toString()}`

	return newPathName
}