import React from "react";
import { useGetCountryQuery } from "../api/taskApi";


function CountryPage() {
  const { data, error, isLoading, isSuccess } = useGetCountryQuery();
  const ll   = data
  console.log(ll)


    return (
      <div>
        {data && data.map((theData, i) => (
          <h1 key={i}>{theData}</h1>
        ))}
        <h1>Hello</h1>
      </div>
    );

}

export default CountryPage;
