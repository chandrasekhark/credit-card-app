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
  }, []);

  const addCreditCardHandler = (creditCardData) => {
    setError(null);
    fetch('http://localhost:8080/creditcard', {
            method : 'POST',
            body : JSON.stringify(creditCardData),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
           }
    }).then((response) => {
      if(response.ok) {
          fetch('http://localhost:8080/creditcards', {
            method:'GET'
          })
            .then((response) => response.json())
            .then((data) => setCreditCards(data)); 
      } else {
        if(response.status===400){
          setError('Entered invalid card number!');
        }
      }
      response.json();
    })
    .catch((err) => {
      console.log(err);
    });   
  };

  return (
    <div>
      <h1 className='page-header'>Credit Card System</h1>
      {error && <span className='page-error'>{error}</span>}
      <NewCreditCard onAddCreditCard={addCreditCardHandler}/>
      <CreditCards creditCards = {creditCards} />
    </div>    
  );
}

export default App;
