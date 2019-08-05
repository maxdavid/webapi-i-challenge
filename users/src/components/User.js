import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

export const User = props => {
  return (
    <UserContainer>
      <UserInfo>
        <h3>{props.name}</h3>
        <p>{props.bio}</p>
      </UserInfo>
      <Buttons>
        <DeleteButton onClick={() => props.deleteUser(props.id)}>
          Delete
        </DeleteButton>
      </Buttons>
    </UserContainer>
  );
};

const UserContainer = styled.div`
  width: 100%;
  background-color: #eeeeee;
  border-radius: 5px;
  margin: 5px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  width: 100%;
`;

const Buttons = styled.div`
  padding: 0 10px;
`;

const DeleteButton = styled.button`
  color: crimson;
`;
