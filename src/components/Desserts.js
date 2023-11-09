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

  const handleUpdateDessert = () => {
    // Send a PUT request to update the selected dessert
    fetch(`http://localhost:4000/dessert/${selectedDessert.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: selectedDessert.title,
        price: selectedDessert.price,
        image: selectedDessert.image,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedDesserts = desserts.map((d) => (d.id === data.id ? data : d));
        setDesserts(updatedDesserts);
        setSelectedDessert(null);
        alert('Dessert updated!');
      });
  };

  const handleDeleteDessert = (dessertId) => {
    // Send a DELETE request to delete a dessert
    fetch(`http://localhost:4000/dessert/${dessertId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to delete dessert with id ${dessertId}`);
        }
        const updatedDesserts = desserts.filter((d) => d.id !== dessertId);
        setDesserts(updatedDesserts);
        setSelectedDessert(null);
      })
      .catch((error) => {
        console.error('Error deleting dessert:', error);
        alert('Failed to delete dessert. Please try again.');
      });
  };
  

  return (
    <div className='container p-2'>
      <h1>Desserts</h1>
      <div className='container row'>
        <div className='col-md-6'>
          <h2>All Desserts</h2>
          {desserts.length < 1 ? (
            <p className='alert alert-warning'>There are no desserts</p>
          ) : (
            desserts.map((dessert) => (
              <Dessert
                key={dessert.id}
                dessert={dessert}
                onSelect={handleSelectDessert}
                onDelete={handleDeleteDessert}
              />
            ))
          )}
        </div>
        <div className='col-md-6'>
          {selectedDessert ? (
            <div>
              <h2>Edit Dessert</h2>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  value={selectedDessert.title}
                  onChange={(e) =>
                    setSelectedDessert((prevState) => ({
                      ...prevState,
                      title: e.target.value,
                    }))
                  }
                  className="form-control"
                  id="title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  value={selectedDessert.price}
                  onChange={(e) =>
                    setSelectedDessert((prevState) => ({
                      ...prevState,
                      price: e.target.value,
                    }))
                  }
                  className="form-control"
                  id="price"
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  value={selectedDessert.image}
                  onChange={(e) =>
                    setSelectedDessert((prevState) => ({
                      ...prevState,
                      image: e.target.value,
                    }))
                  }
                  className="form-control"
                  id="image"
                />
              </div>
              <button
                type="button"
                onClick={handleUpdateDessert}
                className="btn btn-primary"
              >
                Update
              </button>
            </div>
          ) : (
            <p>No dessert selected</p>
          )}
        </div>
      </div>
    </div>
  );
}










