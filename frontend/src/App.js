import React, { useState ,useEffect} from 'react';
import axios from 'axios'; 
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      axios.get( 'http://localhost:3030/search/gta')
    .then(response => {
      console.log(response.data);
      setPosts(response.data);
    
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

    
  return (
    <ul>
      {posts.map((item,index) => (
        <li key={index}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
export default App;