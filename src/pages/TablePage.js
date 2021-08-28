import React, { useEffect, useState } from 'react';
import ReactTable from '../component/reactTable/ReactTable';
import { getCountries } from '../utils/api/table';

const TablePage = () => {
   const [countries, setCountries] = useState(null)
   useEffect(() => {
      getCountries().then(result => setCountries(result.data))
   }, [])

   return (
      <div>
         {countries && <ReactTable countries={countries} />}
      </div>
   );
};

export default TablePage;