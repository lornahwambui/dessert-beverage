import React from 'react';

export default function Dessert({ dessert, onSelect, onUpdate, onDelete }) {
  const handleEdit = () => {
    onSelect(dessert);
  };

  const handleDelete = () => {
    onDelete(dessert.id);
  };

  return (
    <div className="col-m-4 mb-4"> {/* Apply Bootstrap classes for column and margin */}
      <div className="card">
        <img src={dessert.image} alt={dessert.name} className="card-img-top" /> {/* Apply Bootstrap classes for the image */}
        <div className="card-body">
          <h5 className="card-title">{dessert.name}</h5>
          <p className="card-text">Title: {dessert.name}</p>
          <p className="card-text">Price: {dessert.price}</p>
          <button onClick={handleEdit} className="btn btn-primary">Edit</button>
          <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}





