import React from 'react';




function Card(props) {
  console.log(props)

     return (
    <div className='card text-center bg-dark animate__animated animate__fadeInDown'>
    <div className='overflow'>
    <img src={props.image} className='img-card'/>
    </div>
        <div className='card-body text-light'>
            
           <h4 className='card-title'>{props.title}</h4>

            <p className='card-text text-secondary'>lorempIncididunt {props.title}proident cillum amet mollit non reprehenderit consectetur tempor voluptate culpa laborum aliquip.</p>
            <a href={props.url} className='btn btn-outline-secondary' target="_blank">Ir a esta web</a>
        </div>
    </div>
  )
}

export default Card

