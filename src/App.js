import { useEffect, useState } from "react";
import './App.css';
import Cart from "./components/Country/Cart/Cart";
import Country from "./components/Country/Country";


function App() {
  const [countries,setCountries] = useState([]);
  const [cart,setCart] = useState([]);
  //useEffect(funcname,howmanytimes) -- it takes 2 param 1-funcname/funcdef 2-how many times, so we will pass an empty array
  useEffect(()=>{
    //fetching data
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
    .catch(error=>console.log(error))
  },[]);
 
  const handleAddCountry = (country)=>{
    const newCart = [...cart,country];
    setCart(newCart);
    console.log(country)
  };

  return (
    <div className="App">

      <h1>Countries loaded: {countries.length}</h1>
      <h4>Country Added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
            
      {
        countries.map(country=><Country handleAddCountry={handleAddCountry} country={country} key={country.alpha3Code}></Country>)
      }
    </div>
  );
}

export default App;
