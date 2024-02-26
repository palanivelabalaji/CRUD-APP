import React from 'react';

const UserDetail = ({ users}) => {
  return (
    <div>
       <table >
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
        
      </tr>
    </thead>
<tbody>
  <tr>
    <td>{users.firstname}</td>
    <td>{users.lastname}</td>
    <td>{users.email}</td>
    <td>{users.age}</td>
    <td>{users.dob}</td>
    <td>{users.gender}</td>
    <td>{users.hobbies.join("  ")}</td>
    <td>{users.interests}</td>
  </tr>
</tbody>
   </table>
    </div>
  );
};

export default UserDetail;