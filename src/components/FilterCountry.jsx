import { useEffect, useState } from 'react'
import '../styles/components/filtercountry.sass'
import AOS from 'aos'
import 'aos/dist/aos.css'

const countries = [
    {name: 'Australia', flag: '/img/flags/australia.png'},
    {name: 'Burma', flag: '/img/flags/burma.png'},
    {name: 'Canada', flag: '/img/flags/canada.png'},
    {name: 'China', flag: '/img/flags/china.png'},
    {name: 'Cyprus', flag: '/img/flags/cyprus.png'},
    {name: 'Egypt', flag: '/img/flags/egypt.png'},
    {name: 'France', flag: '/img/flags/france.png'},
    {name: 'Greece', flag: '/img/flags/greece.png'},
    {name: 'Iran', flag: '/img/flags/iran.png'},
    {name: 'Isle of Man', flag: '/img/flags/isle-of-man.png'},
    {name: 'Japan', flag: '/img/flags/japan.png'},
    {name: 'Norway', flag: '/img/flags/norway.png'},
    {name: 'Russia', flag: '/img/flags/russia.png'},
    {name: 'Singapore', flag: '/img/flags/singapore.png'},
    {name: 'Somalia', flag: '/img/flags/somalia.png'},
    {name: 'Thailand', flag: '/img/flags/thailand.png'},
    {name: 'Turkey', flag: '/img/flags/turkey.png'},
    {name: 'UAE', flag: '/img/flags/united-arab-emirates.png'},
    {name: 'UK', flag: '/img/flags/united-kingdom.png'},
    {name: 'US', flag: '/img/flags/united-states.png'},
]

const countryMapping = {
    "Australia": {name: 'Australia', flag: '/img/flags/australia.png'},
    "Burma": {name: 'Burma', flag: '/img/flags/burma.png'},
    "Canada": {name: 'Canada', flag: '/img/flags/canada.png'},
    "China": {name: 'China', flag: '/img/flags/china.png'},
    "Cyprus": {name: 'Cyprus', flag: '/img/flags/cyprus.png'},
    "Egypt": {name: 'Egypt', flag: '/img/flags/egypt.png'},
    "France": {name: 'France', flag: '/img/flags/france.png'},
    "Greece": {name: 'Greece', flag: '/img/flags/greece.png'},
    "Iran (Persia)": {name: 'Iran', flag: '/img/flags/iran.png'},
    "Isle of Man": {name: 'Isle of Man', flag: '/img/flags/isle-of-man.png'},
    "Japan": {name: 'Japan', flag: '/img/flags/japan.png'},
    "Norway": {name: 'Norway', flag: '/img/flags/norway.png'},
    "Russia": {name: 'Russia', flag: '/img/flags/russia.png'},
    "Singapore": {name: 'Singapore', flag: '/img/flags/singapore.png'},
    "Somalia": {name: 'Somalia', flag: '/img/flags/somalia.png'},
    "Thailand": {name: 'Thailand', flag: '/img/flags/thailand.png'},
    "Turkey": {name: 'Turkey', flag: '/img/flags/turkey.png'},
    "United Arab Emirates": {name: 'UAE', flag: '/img/flags/united-arab-emirates.png'},
    "United Kingdom": {name: 'UK', flag: '/img/flags/united-kingdom.png'},
    "United States": {name: 'US', flag: '/img/flags/united-states.png'},
  }

const FilterCountry = ({pets}) => {
    // const search = countryMapping[pet.origin];
    const [selectedCountry, setSelectedCountry] = useState("");
    const handleCountryClick = (country) => {
        setSelectedCountry(country);
    };

    const filteredPets = pets.filter((cat) => {
        const country = countryMapping[cat.origin];
        return country && country.name === selectedCountry;
    });

    useEffect(() => {
        AOS.init({
            once: true,
        });     
    }, []);

  return (
    <section id="filter">
        <h2>Choose a country</h2>
        <div className="container" data-aos="fade-right" data-aos-duration="2000">
            {countries.map((country) => (
                <button key={country.name} onClick={() => handleCountryClick(country.name)}>
                    <img src={country.flag} alt={country.name}/>
                    <p>{country.name}</p>
                </button>           
            ))}
        </div>        

        <div id='container-pets'>
            {filteredPets.length > 0 ? (
                filteredPets.map((cat) => (
                    <div data-aos="fade" data-aos-duration="2000" className="pets" key={cat.id}>
                        <img src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`} alt={cat.name}/> 
                        <div className="origins">
                            <h3>
                                {cat.name}
                            </h3>
                        </div>
                    </div>
                ))                
            ) : (
                <p>Choose a country by clicking on the flag.</p>
            )}     
        </div>            
    </section>
  )
}

export default FilterCountry;