import React from "react";

const Carcard = ({ car }) => {
  return (
    <>
      <div className="card bg-base-100   max-w-xs shadow-sm  border-[1px]">
        <figure>
          <img src={car.image} alt="Shoes" />
        </figure>
        <div className="card-body justify-between">
          <h2 className="card-title">
            {car.model}
            <div className="badge badge-secondary">{car.brand}</div>
          </h2>
          <ul className="list-disc">
            {car.key_features.map(each=><li>{each}</li>)}
          </ul>
          <div className="card-actions justify-between ">
            <div className="badge badge-outline">{car.price}$</div>
            <div className="badge badge-outline">{car.top_speed_mph} mph</div>
            <div className="badge badge-outline">{car.horsepower} hp</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carcard;
