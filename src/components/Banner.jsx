import React from "react";

function Banner() {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Drive the Extraordinary

</h1>
            <p className="mb-5">
            Experience unparalleled elegance and performance with our exclusive collection of luxury cars. Crafted for those who demand perfection, every journey becomes a masterpiece.


            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
