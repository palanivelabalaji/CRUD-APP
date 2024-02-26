import React from 'react';

const UserList = ({ users, editUser, deleteUser }) => {
  return (
    <div class='table'  >
      {users.length>0 && (
        <table cellPadding={5} border={2}>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Age</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Hobbies</th>
              <th>Interests</th>
              <th colSpan={3}>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.dob}</td>
                <td>{user.gender}</td>
                <td>{user.hobbies.join(" ")}</td>
                <td>{user.interests}</td>
                <td><button onClick={() => editUser(user)}>✏️</button></td>
                <td><button onClick={() => deleteUser(user.id)}>❌</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
