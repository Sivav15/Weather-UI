import React, { useState } from 'react';



function SelectOption({ width }) {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (

        <select className="bg-[#573A9E] py-2" style={{
            border: 'none',
            outline: 'none',
            width

        }}>
            <option selected >Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
        </select>



    );
}

export default SelectOption;
