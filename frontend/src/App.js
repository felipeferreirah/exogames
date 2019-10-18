import React, {  useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
 

const App = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3030/',
      );
      setData(result.data);
      console.log(data);
    };
    fetchData();
  }, []);


  return (
    <div>
    {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
    </div>
  );
}


export default App;
