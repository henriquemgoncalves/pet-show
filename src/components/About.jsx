import '../styles/components/about.sass'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    AOS.init({
      once:true,
    });
  }, []);

  return (
    <section id='about'>
        <div className="container" data-aos="fade" data-aos-duration="3000">
            <h2>About the Project</h2>
            <p>
                This project was created with the goal of combining a 
                passion for felines and technology, providing an interactive and informative 
                experience about different cat breeds and their countries of origin. 
                <br></br>
                Several modern technologies were used to build this project, allowing for a 
                fast, visually appealing, and user-friendly application. 
                <br></br>
                <br></br>
                The main technologies used include: 
                <br></br>
                - ReactJS and Vite for a fast development framework and quick content rendering.<br></br> 
                - Sass for efficient and scalable styling, allowing for careful design customization.<br></br>
                - React Icons to add stylish icons that enhance the visual interface.<br></br> 
                - Axios was used to consume the cat API, facilitating server communication 
                and obtaining the necessary data for the project.<br></br> 
                - For a more engaging presentation, AOS (Animate On Scroll) is being 
                considered to add elegant animations to page elements, creating a 
                more dynamic and interactive visual experience. This project was 
                developed with the aim of learning and enhancing skills with these 
                technologies, while also exploring the theme of cats, 
                which is popular and captivating.
                <br></br>
                <br></br> 
                The choice of this theme reflects the universality of the love for 
                cats and the curiosity about their unique origins and characteristics.
            </p>
        </div>
      
    </section>
  )
}

export default About;