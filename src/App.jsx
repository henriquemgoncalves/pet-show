import { useEffect, useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import './styles/app.sass'
import axios from 'axios'
import Info from './components/Info';
import FilterCountry from './components/FilterCountry';
import About from './components/About';
import Footer from './components/Footer';

const URL_PETS = 'https://api.thecatapi.com/v1/breeds';

function App() {
  const [pets, setPets] = useState([]);

  const getPegs = async() => {
    try {
      const res = await axios.get(URL_PETS);
      const data = res.data;
      console.log(data)
      setPets(data);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPegs();
  }, [])

  return (
    <div id="app">
      <Header/>
      <NavBar/>
      <Info/>
      <FilterCountry key={pets.id} pets={pets}/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App;