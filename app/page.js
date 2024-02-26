"use client"
import React, { useState, useEffect } from 'react';
import InputForm from './InputForm.js';
import UserList from './UserList.js';
import UserDetail from './UserDetail.js';
import UserEdit from './UserEdit.js';
import UserSearch from './UserSearch.js';
function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [filters,setFilter]=useState([]);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);


  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const response = await fetch(`http://localhost:8000/0/`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Create a new user
  const addUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:8000/0/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      setUsers( [...users, data]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Update an existing user
  const updateUser = async (userData) => {
    try {
      const response = await fetch(`http://localhost:8000/0/${userData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const updatedUser = await response.json();
      const updatedUsers = users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
      setUsers(updatedUsers);
      setSelectedUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Delete a user
  const deleteUser = async (userId) => {
    try {
      await fetch(`http://localhost:8000/0/${userId}`, {
        method: 'DELETE',
      });
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  
  const searchUser=async ([inputtext,inputtype]) =>{
    const searchTermLower = inputtext.toLowerCase();
   
    let filteredUsers = [];
    switch (inputtype) {
        case 'age':
            filteredUsers = users.filter(user => user.age === parseInt(inputtext));
            break;
        case 'firstname':
            filteredUsers = users.filter(user => user.firstname.toLowerCase().includes(searchTermLower));
            break;
        case 'lastname':
            filteredUsers = users.filter(user => user.lastname.toLowerCase().includes(searchTermLower));
            break;
        case 'hobbies':
            filteredUsers = users.filter(user => user.hobbies.includes(inputtext));
            break;
        default:
            break;
    }
setFilter(filteredUsers);
    return filteredUsers;
}





  return (
    <div>
      <h1>CRUD Application</h1>
      <UserSearch searchUser={searchUser} />
      {filters ?
        (<UserList users={filters}  editUser={setSelectedUser} deleteUser={deleteUser} />):[]
      }
      <InputForm addUser={addUser} updateUser={updateUser} initialData={{firstname: "",lastname: "",email: "",dob: "",gender: "",hobbies:[],interests:""
}} />
      <UserList users={users}  editUser={setSelectedUser} deleteUser={deleteUser} />

      {selectedUser ? (
        <div>
          <UserDetail users={selectedUser} />
          <UserEdit user={selectedUser} updateUser={updateUser} />
        </div>
      ) : null}
    </div>
  );
}

export default App;