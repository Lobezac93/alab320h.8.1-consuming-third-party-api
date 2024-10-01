import './App.css'
import React, { useState, useEffect } from 'react';
import  getAllStarships from './services/sw-api'; 
import Card from './Card'; 


function App() {
  const [starShips, setStarShips] = useState([]);

  useEffect(() => {
    async function fetchStarShips() {
      const data = await getAllStarships();
      setStarShips(data);
    }

    fetchStarShips(); 
  }, []);

  return (
    <div>
      <h1>STAR WARS STARSHIP</h1>
      <div className='starship-grid'>
        {starShips.map((ship, index) => (
          <Card key={index} name={ship.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
