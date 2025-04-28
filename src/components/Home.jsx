import React, { useEffect, useState } from "react";

import Banner from "./Banner";

import Carcontainer from "./Carcontainer";

const Home = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("/cars.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
     
        <Banner></Banner>
        <div className="container mx-auto">

        <Carcontainer cars={cars}></Carcontainer>
        </div>
     
    </div>
  );
};

export default Home;
