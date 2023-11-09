import React from "react";

const About = () => {
    const locations = ["New York", "&Los Angeles"];
  return (
    <div className="about container mx-auto">
      <h2 className="text-center">About Us</h2>
      <p className="text-center">
        Welcome to Dessert & Beverage! We are passionate about creating
        delightful and mouthwatering desserts and beverages to satisfy your
        sweet cravings. Our team of experienced chefs and mixologists craft
        the finest recipes to bring you a taste of pure indulgence.
      </p>
      <p className="text-center">
        Whether you have a sweet tooth for cakes, pastries, or a preference for
        refreshing beverages, we have a diverse menu to cater to your desires.
        Join us on this delicious journey, and let us satisfy your taste buds
        with our extraordinary creations.
      </p>
      <p className="text-center">
        Find us in {locations} for an unforgettable dessert experience.
      </p>
      <p className="text-center">
        Contact us at: <a href={`tel:${+25408736363553}`}>{+25408736363553}</a>
      </p>
    </div>
  );
};

export default About;

