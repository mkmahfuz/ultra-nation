import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [countries,setCountries] = useState([]);
  //useEffect(funcname,howmanytimes) -- it takes 2 param 1-funcname/funcdef 2-how many times, so we will pass an empty array
  useEffect(()=>{
    //fetching data
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
    .catch(error=>console.log(error))
  },[]);
 
  return (
    <div className="App">

      <h1>Countries loaded: {countries.length}</h1>
      
      {
        countries.map(country=><li>{country.name}</li>)
      }
    </div>
  );
}

export default App;
