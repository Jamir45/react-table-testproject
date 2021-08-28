import axios from "../axios";
import { restEndPoint } from "../constant";

export const getCountries = async () => {
   return await axios.get(
      `${restEndPoint}/all`
   );
};