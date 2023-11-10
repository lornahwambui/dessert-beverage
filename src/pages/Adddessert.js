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
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Dessert</h2>
      <form style={styles.form}>
        <div className="form-group">
          <label htmlFor="image" style={styles.label}>
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder="Enter Image URL"
            name="image"
            value={newDessert.image}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title" style={styles.label}>
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter Title"
            name="title"
            value={newDessert.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price" style={styles.label}>
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter Price"
            name="price"
            value={newDessert.price}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAddDessert}>
          Add Dessert
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
  },
};



