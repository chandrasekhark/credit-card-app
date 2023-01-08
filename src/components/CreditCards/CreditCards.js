import React, { useMemo } from "react";

import "./CreditCards.css";
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const CreditCards = (props) => {
    
    const creditcards = props.creditCards;
    
    const rowData = creditcards;
    const columnDefs = [
        {field: 'id', hide:true}, 
        {field: 'name'}, 
        {field: 'cardNumber'}, 
        {headerName: 'Balance (£)',field: 'balance'}, 
        {headerName: 'Limit (£)', field: 'limit'}];

    const defaultColDefs = useMemo(() => ({
        sortable: true, 
        filter: true
    }), []);

    return (
        <div className="ag-theme-alpine center" style={{height:300, width:802}}>
            <AgGridReact 
                rowData={rowData} 
                columnDefs={columnDefs}
                defaultColDef = {defaultColDefs}/>
        </div>
    );
    
};

export default CreditCards;