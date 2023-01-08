import React, { useState } from "react";
import "./CreditCardForm.css";

const CreditCardForm = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredCardNumber, setEnteredCardNumber] = useState('');
    const [enteredLimit, setEnteredLimit] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const cardNumberChangedHandler = (event) => {
        if(event.target.value.length < 20) {
            setEnteredCardNumber(event.target.value);
        } else {
            window.alert("Card Number shouldn't exceed 19 digits");
        }
    };

    const limitChangedHandler = (event) => {
        setEnteredLimit(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const creditCardData = {
            name : enteredName,
            cardNumber : enteredCardNumber,
            limit : enteredLimit,
            balance: 0
        };

        props.onSaveCreditCardData(creditCardData);
        setEnteredName('');
        setEnteredCardNumber('');
        setEnteredLimit('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-card__controles">
                <div className="new-card__controle">
                    <label>Name</label>
                    <input type="text" value={enteredName} onChange={nameChangeHandler} />
                </div>

                <div className="new-card__controle">
                    <label>Card Number</label>
                    <input type="number" value={enteredCardNumber} onChange={cardNumberChangedHandler} />
                </div>

                <div className="new-card__controle">
                    <label>Limit</label>
                    <input type="number" value={enteredLimit} onChange={limitChangedHandler} />
                </div>
            </div>

            <div className="new-card__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add</button>
            </div>

        </form>
    );
};

export default CreditCardForm;