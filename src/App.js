import React, { useState, useEffect } from 'react';
import NewCreditCard from './components/NewCreditCard/NewCreditCard';
import CreditCards from './components/CreditCards/CreditCards';

import './App.css';

function App() {

  const [creditCards, setCreditCards] = useState([]);
  const [error, setError] = useState(null);

  useEffect ( () => {
    fetch('http://localhost:8080/creditcards', {
      method:'GET'
    })
      .then((response) => response.json())
      .then((data) => setCreditCards(data))
      .catch((err) => {
        console.log(err);
      });
  }, [])

  const addCreditCardHandler = (creditCardData) => {
    fetch('http://localhost:8080/creditcard', {
            method : 'POST',
            body : JSON.stringify(creditCardData),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
           }
    }).then((response) => response.json())
    .then((data) => {
        setCreditCards((prevCreditCards) => {
          return [data, ...prevCreditCards];
        });
      
    })
    .catch((err) => {
      console.log("test ",err.data);
      setError(err);
    });   
  };

  

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <NewCreditCard onAddCreditCard={addCreditCardHandler}/>
      <CreditCards creditCards = {creditCards} />
    </div>    
  );
}

export default App;
