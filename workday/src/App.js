import React, { useState } from 'react';
import Home from './pages/Home';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false); // Add loggedIn state

  return (

    <Home/>
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<LoginPage setLoggedIn={setLoggedIn} />} /> Pass setLoggedIn to LoginPage */}
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/contact" element={<Contact cartItems={cartItems} />} />
    //     <Route path="/menu" element={<Menu setCartItems={setCartItems} />} />
    //     <Route path="/*" element={<Home />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
