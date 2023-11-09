import React, { useState } from 'react';

export default function AddDessert() {
  const [newDessert, setNewDessert] = useState({ image: '', title: '', price: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDessert({
      ...newDessert,
      [name]: value,
    });
  };

  const handleAddDessert = () => {
    // Send a POST request to create a new dessert
    fetch("http://localhost:4000/dessert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDessert),
    })
      .then((res) => res.json())
      .then(() => {
        alert('New dessert added!'); 
        setNewDessert({ image: '', title: '', price: '' }); 
      });
  };

  return (
    <div>
      <h2>Add New Dessert</h2>
      <input
        type="text"
        placeholder="Image"
        name="image"
        value={newDessert.image}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={newDessert.title}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Price"
        name="price"
        value={newDessert.price}
        onChange={handleInputChange}
      />
      <button onClick={handleAddDessert}>Add Dessert</button>
    </div>
  );
}



