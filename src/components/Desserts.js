import React, { useEffect, useState } from 'react';
import Dessert from './Dessert';

export default function DessertsList() {
  const [desserts, setDesserts] = useState([]);
  const [selectedDessert, setSelectedDessert] = useState(null);
  const [updatedDessert, setUpdatedDessert] = useState({
    name: '',
    title: '',
    price: 0,
  });
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

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
    setUpdateFormVisible(false);
  };

  const handleUpdateFormChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDessert({
      ...updatedDessert,
      [name]: value,
    });
  };

  const handleShowUpdateForm = () => {
    setUpdateFormVisible(true);
    setUpdatedDessert({
      name: selectedDessert.name,
      title: selectedDessert.title,
      price: selectedDessert.price,
    });
  };

  const handleUpdateDessert = () => {
    // Send a PUT request to update the selected dessert
    fetch(`http://localhost:4000/dessert/${selectedDessert.id}`, {
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
        setUpdatedDessert({ name: '', title: '', price: 0 });
        setUpdateFormVisible(false);
        alert('Dessert updated!');
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
              onUpdate={handleUpdateDessert}
              showUpdateForm={selectedDessert && selectedDessert.id === dessert.id && isUpdateFormVisible}
              updateFormValues={updatedDessert}
              onFormChange={handleUpdateFormChange}
              onShowUpdateForm={handleShowUpdateForm}
            />
          ))}
        </div>
        <div className='col-md-6'>
          {selectedDessert ? (
            <div>
              <h2>Edit Dessert</h2>
              <Dessert
                dessert={selectedDessert}
                onUpdate={handleUpdateDessert}
                showUpdateForm={isUpdateFormVisible}
                updateFormValues={updatedDessert}
                onFormChange={handleUpdateFormChange}
                onShowUpdateForm={handleShowUpdateForm}
              />
            </div>
          ) : (
            <p>No dessert selected</p>
          )}
        </div>
      </div>
    </div>
  );
}









