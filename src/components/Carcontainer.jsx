import React from "react";
import Carcard from "./Carcard";

const Carcontainer = ({ cars }) => {
  return (
    <>
      <div className="container my-10 flex justify-center   flex-wrap gap-5">
        {cars.map((car) => (
          <Carcard key={car.id} car={car} />
        ))}
      </div>
    </>
  );
};

export default Carcontainer;
