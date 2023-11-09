import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
    const { id } = useParams();
    const [dessert, setDessert] = useState({}); // Renamed from setUser for clarity

    useEffect(() => {
        fetch(`http://localhost:4000/dessert/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setDessert(data); // Renamed from setUser for clarity
            });
    }, [id]); // Added id as a dependency so it refetches when id changes

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          {/* Corrected the image src and alt attributes */}
          <img className='img-fluid' src={dessert.image_url} alt={dessert.name || 'Dessert'} />
        </div>
        <div className='col-md-6'>
          {/* Corrected the references to the dessert state variable */}
          <h6>{dessert.name}</h6>
          <h6>{dessert.price}</h6>
        </div>
      </div>
    </div>
  );
}
