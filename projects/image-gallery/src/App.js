import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/card'
import Search from './components/Form'

import './App.css';


function App() {

  const API_KEY = '23654287-8332e3d62319f1fa1254cd850'; //PIXABAY
  const [images, setImages] = useState([])
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let result =  fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${searchText}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits)
      setLoading(false)
    })
  },[searchText])

  return (
    <div className="App">
      <Search setSearchText={setSearchText}/>
      {loading ? 'Loading ...' : 
        <Card images={images} />
      }
    </div>
  );
}

export default App;
