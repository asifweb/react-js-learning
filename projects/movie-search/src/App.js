import './App.css';
// import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/popuo-box.css'
import {images} from './utils/images'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Pages Importing
import NavBar from './components/NavBar'
import Header from './components/Header'
import Home from './pages/Home'
import Videos from './pages/Videos'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'


function App() {
  
  return (
    <>
      <div className="full">
        <BrowserRouter>
          <NavBar />
          <div className="main">
              <Header />
              <Routes>
                <Route exact path='/' element={ <Home />}/>
                <Route path='videos' element={ <Videos />}/>
                <Route path='reviews' element={ <Reviews />}/>
                <Route path='contact' element={ <Contact />}/>
                <Route element={ <NotFound />}/>
              </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
