import React from 'react';

import AddUserForm from './components/AddUserForm/AddUserForm';
import ManageData from './components/AddUserForm/ManageData/ManageData';
import NavBar from './components/AddUserForm/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <AddUserForm></AddUserForm>
   
      <ManageData></ManageData>
    </div>
  );
}

export default App;
