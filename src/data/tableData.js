import { getCountries } from "../utils/api/table"

export const countryData = async () => {
   const countries = await getCountries()
   return countries
}