import React from "react";
import { useGetCountryDetailsQuery } from '@/services/cryptopApi';

function Country() {
  const {data, isFetching}=useGetCountryDetailsQuery()
 console.log(data)
  return (
    <div>contries</div>
  )
}

export default Country;
