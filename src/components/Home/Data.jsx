import React from "react";
import Social from "./Social";
import TechStack from "./TechStack";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Namaste! 🙏🏻</h1>
      <p className="home__description">
        Hi, I'm Shaurya Puri. A passionate Software Engineer based in 📍 London,
        England
      </p>
      <Social />
      <TechStack />
    </div>
  );
};

export default Data;
