import Contact from "../Contact/Contact";
import './Contact.css'
import  Instagram from "./../../assets/insta.png"
import youtube from "./../../assets/youtube.png"
import facebook from "./../../assets/fb.png"

function ContactApp() {
  return (
    <div className="h-screen">
      <div className="lg:grid-cols-2 lg:gap-6 bg-blue-300 lg:h-2/3">
        <div className="flex">
          <h1 className="uppercase ">Contact Me</h1>
          <h2 className="feel">Feel free to colloborate</h2>
        </div>
        <Contact />
        <div className='Social-icon-container'>
          <a href='https://www.facebook.com/Singer-dp-828559324193498'>
            <img src={facebook} className='social-icon' alt='facebook' />
          </a>
          <a href='https://www.youtube.com/channel/UCrE3aSd529fdqYiPGTQG0BA/featured'>
            <img src={youtube} className='social-icon' alt='youtube' />
          </a>
          <a href='https://www.instagram.com/singer_dp_/'>
            
            <img src={Instagram} className='social-icon' alt='Instagram' />
          </a>
      </div>
      </div>
    </div>
  );
}

export default ContactApp;
