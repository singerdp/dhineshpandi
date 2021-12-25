import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Footer from '../Footer/Footer';
import violin from './../../assets/violin.jpeg'
import dp_about from './../../assets/Dp_about.jpg'
import { Avatar } from "@material-ui/core";
import sing from './../../assets/sing.jpg'
import './About.css'


const about = () => {
     return (
          <div
               className="About"
               style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
               <div style={{ width: "50%", textAlign: "center" }}>
                    <h1 style={{ marginBottom: 80, color:"#ffff "}}>About Dp</h1>
                    <Slider >
                         <Card img={violin} p="
Myself, Dhinesh Pandi started my career from engineering and now ended up with music. 
Music is a miracle that happened at my age of 12. From then and till now, I had never let my passion down.
" />
                         <Card img={dp_about} p="I have been skilled in Carnatic music, Western Classical and noted for both male and female voice for the song titled 'Amma Amma' from VIP. This 
                         song has added a feather to my cap."/>
                         <Card img={sing} p="Worked on a complete composition of the song titled 'Army' and released it. Futhermore, I have done a lot of jamming across the cities. Just want to spread the love through my music. Come and join us for more magical moments."/>
                    </Slider>
               </div>
          </div>
     );
};
const Card = ({ img,p }) => {
     return (
          <div
               style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    color: "gray",
               }}
          >
               <Avatar
                    imgProps={{ style: { borderRadius: "50%" } }}
                    src={img}
                    style={{
                         width: 120,
                         height: 120,
                         border: "1px solid lightgray",
                         padding: 7,
                         marginBottom: 20,
                    }}
               />
               {p}
               <p style={{ fontStyle: "italic", marginTop: 25 }}>
                    <span style={{ fontWeight: 500, color: "green" }}>Singer</span> ,
                    Music Industry
               </p>
               <Footer className="foot" link='Check out my songs' toAddress='./songs' />
          </div>
     );
};

export default about
