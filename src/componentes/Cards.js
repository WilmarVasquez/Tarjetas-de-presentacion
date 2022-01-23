import React from 'react';
import Card from './Card';
import pixel1 from './imagenes/pexels1.png';
import pixel2 from './imagenes/pexels2.png';
import pixel3 from './imagenes/pexels3.png';



const cards = [
    {
      id: 1,
      title: "Titulo 1",
      image: pixel1,
      url: "https://wilmarvasquez.github.io/presentacionWeb/",
    },
    {
      id: 2,
      title: "Titulo 2",
      image: pixel2,
      url: "https://desencriptandoblockchain.blogspot.com/2021/09/mi-primer-articulo-porque-es-importante.html",
    },
    {
      id: 3,
      title: "Titulo 3",
      image: pixel3,
      url: "https://www.youtube.com/channel/UC4f2Rntc_p-4gyJAyDSfh9A",
    },
  ];

function Cards() {
  return ( 
  <div className="container d-flex justify-content-center align-items-center h-100">
    <div className='row'>
         
        {
          cards.map(card => (
         <div className='col-md-4' key={card.id}> 
            <Card title={card.title} image={card.image} url={card.url}/>
        </div>))
        }
       
    </div>
  </div>
)
}


export default Cards