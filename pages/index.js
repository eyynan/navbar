import NavBar from '../components/NavBar';
import Image from 'next/image';
import pict1 from '../public/pict1.jpg';

export default function Home() {
  return (
    <div>

      <NavBar />

      <section
        id="home"
        className="text-white h-screen bg-black  text-center flex"
      >
        
        <Image id="pic" className="hero-image" src={pict1} 
        />
  
      </section>
      <section id="offer" className=" text-white h-screen bg-green-900 flex" >
        <h1 className="m-auto font-sans text-7xl text-white">
          Offer
        </h1>
      </section>
      <section
        id="gallery"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-sans text-7xl text-white">
          gallery
        </h1>
      </section>
      <section
        id="local"
        className=" text-white h-screen bg-purple-900 flex"
      >
        <h1 className="m-auto font-sans text-7xl text-white">
          Location
        </h1>
      </section>
      <section
        id="contact"
        className=" text-white h-screen bg-black flex"
      >
        <h1 className="m-auto font-sans text-7xl text-white">
          Contacts
        </h1>
      </section>
    </div>
  );
}
