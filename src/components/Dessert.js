import React from 'react';

export default function Dessert({ dessert, onSelect, onDelete }) {
  const handleEdit = () => {
    onSelect(dessert);
  };

  const handleDelete = () => {
    onDelete(dessert.id); 
  };

  return (
    <div className="col-m-4 mb-4">
      <div className="card">
        <img src={dessert.image} alt={dessert.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{dessert.title}</h5>
          <p className="card-text">Title: {dessert.title}</p>
          <p className="card-text">Price: {dessert.price}</p>
          <button onClick={handleEdit} className="btn btn-primary">
            Edit
          </button>
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}






