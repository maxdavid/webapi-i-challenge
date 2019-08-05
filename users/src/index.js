import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { UserList } from './components';

const App = () => {
  return (
    <div>
      <UserList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
