import React, { useState } from 'react';
import Home from './pages/Home';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false); // Add loggedIn state

  return (

    <Home/>
    
  );
}

export default App;
