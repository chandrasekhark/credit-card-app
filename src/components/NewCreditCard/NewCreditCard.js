import React, { useState } from "react";
import CreditCardForm from "./CreditCardForm";

import './NewCreditCard.css';

const NewCreditCard = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveCreditCardData = (enteredCreditCardData) => {
        props.onAddCreditCard(enteredCreditCardData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return <div className="new-card">
        {!isEditing && <button onClick={startEditingHandler}>Add Card</button>} 
        {isEditing && <CreditCardForm onSaveCreditCardData={saveCreditCardData} onCancel={stopEditingHandler}/>}
    </div>
};

export default NewCreditCard;