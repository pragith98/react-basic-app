
import React from 'react';
import NavigationBar from './components/NavigationBar';
import Contacts from './components/pages/Contacts';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Contacts/>
    </React.Fragment>
  );
}

export default App;
