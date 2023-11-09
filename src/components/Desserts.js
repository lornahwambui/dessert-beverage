import React, { useEffect, useState } from 'react';
import Dessert from './Dessert';


export default function DessertsList() {
  const [desserts, setDesserts] = useState([]);
  const [selectedDessert, setSelectedDessert] = useState(null);

  useEffect(() => {
    // Fetch data for desserts
    fetch("http://localhost:4000/dessert")
      .then((res) => res.json())
      .then((data) => {
        setDesserts(data);
      });
  }, []);

  const handleSelectDessert = (dessert) => {
    setSelectedDessert(dessert);
  };

  const handleUpdateDessert = (updatedDessert) => {
    // Send a PUT request to update an existing dessert
    fetch(`http://localhost:4000/dessert/${updatedDessert.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDessert),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedDesserts = desserts.map((d) => (d.id === data.id ? data : d));
        setDesserts(updatedDesserts);
        setSelectedDessert(null);
      });
  };

  const handleDeleteDessert = (dessertId) => {
    // Send a DELETE request to delete a dessert
    fetch(`http://localhost:4000/dessert/${dessertId}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedDesserts = desserts.filter((d) => d.id !== dessertId);
        setDesserts(updatedDesserts);
        setSelectedDessert(null);
      });
  };

  return (
    <div className='container p-2'>
      <h1>Desserts</h1>
      <div className='container row'>
      <div className='col-md-6'>
  <h2>All Desserts</h2>
  {desserts.length < 1 && (
    <p className='alert alert-warning'>There are no desserts</p>
  )}
  {desserts.map((dessert) => (
    <Dessert
    key={dessert.id}
    dessert={dessert}
    onSelect={handleSelectDessert} 
    onDelete={handleDeleteDessert}
  />
  
  ))}
</div>

        </div>
        <div className='col-md-6'>
       {selectedDessert ? (
    <div>
      <h2>Edit Dessert</h2>
      <Dessert dessert={selectedDessert} onUpdate={handleUpdateDessert} />
    </div>
  ) : (
    <p>No dessert selected</p> 
  )}
</div>

      </div>
    
  );
}








