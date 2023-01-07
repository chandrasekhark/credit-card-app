import React from 'react';
import NewCreditCard from './components/NewCreditCard/NewCreditCard';

import './App.css';

function App() {

  const addCreditCardHandler = (creditCardData) => {
    fetch('http://localhost:8080/creditcard', {
            method : 'POST',
            body : JSON.stringify(creditCardData),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
           }
    }).then((response) => response.json()).catch((err) => {
      console.log(err.message)
    });   
  };

  return (
    <div>
      <NewCreditCard onAddCreditCard={addCreditCardHandler}/>
    </div>    
  );
}

export default App;
