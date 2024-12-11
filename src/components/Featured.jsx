import React from "react";

const Featured = () => {
  return (
    <div >
      <div className="my-8 p-4">
        <h3 className="text-sm lg:text-5xl text-black font-bold text-center">Featured <span className="text-error">Bikes</span> In This Year</h3>
        <p className="text-center"><span className="text-sm text-orange-500">Best Bikes Collections</span></p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        <div className="mt-5 items-center">
          <div className="card card-compact  w-96 shadow-xl mb-3">
            <figure>
              <img src="/public/images/others/latest1.png" alt="Shoes" />
            </figure>
          </div>
        </div>
        <div> 
          <div className="card card-compact  w-96 shadow-xl mb-3">
            <figure>
              <img src="/public/images/others/latest2.png" alt="Shoes" />
            </figure>
          </div>
        </div>
        <div>
          <div className="card card-compact  w-96 shadow-xl lg:mb-3">
            <figure>
              <img src="/public/images/others/latest3.png" alt="Shoes" />
            </figure>
          </div>
        </div>
        </div>
      </div>
      <div className="my-12">
        <h3 className="text-sm mb-6 lg:text-5xl lg:mb-12 text-black font-bold text-center">Latest <span className="text-error">Bikes</span></h3>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="pl-6">
          <div className="card card-compact bg-white w-96 shadow-xl ">
            <figure>
              <img src="/public/images/others/latest1.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Ducati XDIAVEL S-73</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Lacus,
                fermentum amet <br /> faucibus sed id nisi lectus at.
              </p>
              <div className="card-actions justify-start">
                <button className="btn btn-error text-white">Purchase</button>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div className="card card-compact bg-white w-96 shadow-xl">
            <figure>
              <img src="/public/images/others/latest2.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Motorcycles & Scooters</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Lacus,
                fermentum amet <br /> faucibus sed id nisi lectus at.
              </p>
              <div className="card-actions justify-start">
                <button className="btn btn-error text-white">Purchase</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-compact bg-white w-96 shadow-xl">
            <figure>
              <img src="/public/images/others/latest3.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">2021 Honda CBR500R</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Lacus,
                fermentum amet <br /> faucibus sed id nisi lectus at.
              </p>
              <div className="card-actions justify-start">
                <button className="btn btn-error text-white">Purchase</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Featured;
