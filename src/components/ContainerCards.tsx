import { useState } from "react";
import img1 from "../assets/images/arroyo.jpg";
import img2 from "../assets/images/bosque.jpg";
import img3 from "../assets/images/camino.jpg";
import img4 from "../assets/images/lago.jpg";
import img5 from "../assets/images/montanas.jpg";

interface LocationInterface {
  image: string;
  text: string;
}

function ContainerCards() {
  const [isActive, setIsActive]= useState<number>(2);
  const loocationsList: LocationInterface[] = [
    { image: img1, text: "Arroyo" },
    { image: img2, text: "Bosque" },
    { image: img3, text: "Camino" },
    { image: img4, text: "Lago" },
    { image: img5, text: "Montanas" },
  ];

  return (
    <div id="ContainerCards">
{loocationsList.map((location, index)=>(
      <div key={index} className={`${(isActive === index) && 'expand '} card`} onClick={()=>setIsActive(index)}>
        <img src={location.image} alt="" />
        <p className="location-text">{location.text}</p>
      </div>))
      }
    </div>
  )
}

export default ContainerCards
