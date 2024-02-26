"use client"
import React, { useState } from 'react';

const UserSearch = ({ searchUser }) => {
    const [base, setBase] = useState(null);
    const [inputText, setInputText] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'search') {
            setInputText(value);
        } else if (name === 'type') {
            setBase(value);
        }
    };

    return (
        <div class='search'>
            <input
            class='searchinput'
                type="text"
                name="search"
                value={inputText}
                placeholder='Enter text'
                onChange={handleInputChange}
            />
            <select name="type" value={base} onChange={handleInputChange}>
                <option value="age">Age</option>
                <option value="firstname">FirstName</option>
                <option value="lastname">LastName</option>
                <option value="hobbies">Hobbies</option>
            </select>
            <button class='a' onClick={() => searchUser([inputText,base])}>Search</button>
        </div>

    );
};

export default UserSearch;
