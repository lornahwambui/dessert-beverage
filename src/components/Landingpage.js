import React from 'react';

const Landingpage = () => {
  const backgroundStyle = {
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/10/03/22/01/dish-970446_960_720.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <div>
        <h1>Welcome to Dessert & Beverage</h1>
        <p>Indulge in the Sweet Moments</p>
        <h4>Explore Our Menu</h4>
        
      </div>
    </div>
  );
};

export default Landingpage;
