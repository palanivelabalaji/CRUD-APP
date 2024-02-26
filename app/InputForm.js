"use client"
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const InputForm = ({ addUser, updateUser, initialData }) => {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (event) => {
    const { name, value ,checked} = event.target;

    let updatedHobbies;

    if (checked && name!="gender") {
      updatedHobbies = [...formData.hobbies, value];
      setFormData({
        ...formData,
        hobbies: updatedHobbies,
      });
    } 
else if (name === 'dob') {
        const dobDate = new Date(value);
        const currentDate = new Date();

        let age = currentDate.getFullYear() - dobDate.getFullYear();
        const monthDiff = currentDate.getMonth() - dobDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < dobDate.getDate())) {
            age--;
        }

        setFormData((prevData) => ({
            ...prevData,
            dob: value,
            age: age
        }));
    } else {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
};

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.id) {
      updateUser(formData);
    } else {
      const newFriend = {    id: uuidv4(),...formData,};
      addUser(formData);
    }
    setFormData({firstname: "",lastname: "",email: "",dob: "",gender: "",hobbies:"",interests:""
  });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        FirstName:
        <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} />
      </label>
      <label>
        LastName:
        <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <label>
        Date of Birth:
        <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
      </label>

      <div class="gender">
      <label>
        Gender:
        <input type="radio" name="gender" value="Male" onChange={handleInputChange} />
        Male
      </label>
      <label>
        <input type="radio" name="gender" value="Female" onChange={handleInputChange} />
        Female

      </label>
    <label>
        <input type="radio" name="gender" value="Others" onChange={handleInputChange} />
        Others
      </label>
      </div>
      <label>
      Interests
        <input type="textarea" name="interests" value={formData.interests} onChange={handleInputChange} />
      </label>
      
<label>
  Hobbies:
<div>
      <label For="Reading">
        <input
          id="Reading"
          value="Reading"
          onChange={handleInputChange}
          type="checkbox"
          checked={formData.hobbies.includes('Reading')}
        />
        Reading
      </label>
      <label htmlFor="Writing">
        <input
          id="Writing"
          value="Writing"
          onChange={handleInputChange}
          type="checkbox"
          checked={formData.hobbies.includes('Writing')}
        />
        Writing
      </label>
      <label htmlFor="Cooking">
        <input
          id="Cooking"
          value="Cooking"
          onChange={handleInputChange}
          type="checkbox"
          checked={formData.hobbies.includes('Cooking')}
        />
        Cooking
      </label>
      <label htmlFor="Dancing">
        <input
          id="Dancing"
          value="Dancing"
          onChange={handleInputChange}
          type="checkbox"
          checked={formData.hobbies.includes('Dancing')}
        />
        Dancing
      </label>
      <br></br>
      <label htmlFor="Singing">
        <input
          id="Singing"
          value="Singing"
          onChange={handleInputChange}
          type="checkbox"
          checked={formData.hobbies.includes('Singing')}
        />
        Singing
      </label>
      <label htmlFor="Playing">
        <input
          id="Playing"
          value="Playing"
          onChange={handleInputChange}
          type="checkbox"
          checked={formData.hobbies.includes('Playing')}
        />
        Playing
      </label>
      <label htmlFor="Gardening">
        <input
          id="Gardening"
          value="Gardening"
          onChange={handleInputChange}
          type="checkbox"
          checked={formData.hobbies.includes('Gardening')}
        />
        Gardening
      </label>
      </div>
    </label>

      <button type="submit" id='inputform'>Submit</button>
    </form>
  );
};

export default InputForm;
