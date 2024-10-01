const BASE_URL = 'https://swapi.dev/api';

async function getAllStarships() {
  try {
    const resp = await fetch(`${BASE_URL}/starships/`);
    if (!resp.ok) throw new Error('Failed to fetch starships');
    
    const data = await resp.json();
    const starShipData = data.results;
    
    return starShipData;
  } catch (error) {
    console.error('Error fetching starships:', error);
    return []; // Return an empty array if an error occurs
  }
}

export default getAllStarships;
