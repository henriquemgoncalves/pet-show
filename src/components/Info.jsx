import '../styles/components/info.sass'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Info = () => {

  useEffect(() => {
    AOS.init({
        once: true,
    });     
}, []);

  return (
    <div id='info'>
        <div className="container" data-aos="fade-left" data-aos-duration="3000">
            <p>
            Cats are fascinating creatures that have captured the hearts of people worldwide. 
            Throughout history, they have adapted to different regions, resulting in a rich 
            diversity of breeds, each with unique characteristics and intriguing histories.
            <br></br> 
            <br></br> 
            For instance, the Egyptian cat, one of the oldest breeds, dates back to the time 
            of the pharaohs, where it was revered as a symbol of grace and protection. Cats 
            from Turkey, such as the famous Angora cat, are known for their elegant fur and 
            affectionate behavior. Every country that has given rise to a breed carries not 
            only its genetics but also the culture and affection that these animals inspire 
            in their owners. 
            <br></br>
            <br></br>
            Exploring these origins is to understand how these felines became 
            so special and how their history is deeply intertwined with ours.
            </p>
        </div>     
    </div>
  )
}

export default Info;