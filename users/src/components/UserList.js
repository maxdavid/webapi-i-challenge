import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { User } from './User';

export const UserList = () => {
  const [users, setUsers] = useState([]);

  const deleteUser = id => {
    axios
      .delete(`http://localhost:8000/api/users/${id}`)
      .then(() => getUsers());
  };

  const getUsers = () => {
    axios.get('http://localhost:8000/api/users').then(res => {
      console.log(res);
      setUsers(res.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContainer>
      {users.map(user => (
        <User key={user.id} deleteUser={deleteUser} {...user} />
      ))}
    </UsersContainer>
  );
};

const UsersContainer = styled.div`
  width: 600px;
  text-align: center;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
