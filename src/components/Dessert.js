import React from 'react';

export default function Dessert({ dessert, onSelect,  onDelete }) {
 

  return (
    <div className="col-m-4 mb-4"> {/* Apply Bootstrap classes for column and margin */}
      <div className="card">
        <img src={dessert.image} alt={dessert.name} className="card-img-top" /> {/* Apply Bootstrap classes for the image */}
        <div className="card-body">
          <h5 className="card-title">{dessert.title}</h5>
          <p className="card-text">Title: {dessert.title}</p>
          <p className="card-text">Price: {dessert.price}</p>
          <button onClick={()=>onSelect(dessert)} className="btn btn-primary">Edit</button>
          <button onClick={()=>onDelete(dessert)} className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}





