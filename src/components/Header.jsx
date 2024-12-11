import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full lg:h-[550px] bg-red-400">
          <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-24">
            <div className="space-y-4 flex-1">
                <h2 className="text-3xl lg:text-6xl text-black font-bold">Ride-on R15 V4 <br /> with Smile</h2>
                <p className="text-black">Amet minim mollit non deserunt ullamco <br />
                est sit aliqua dolor do amet sint. Velit officia consequat <br /> duis enim velit mollit.</p>
                <button className="btn btn-error text-white">Purchase</button>
            </div>
            <div><img src="/public/images/slider/bike1.png" className="w-auto" /></div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full bg-red-400">
        <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-24">
            <div className="space-y-4 flex-1">
                <h2 className="text-3xl lg:text-6xl text-black font-bold">Ride-on Fz V6 <br /> with Smile</h2>
                <p className="text-black">Amet minim mollit non deserunt ullamco <br />
                est sit aliqua dolor do amet sint. Velit officia consequat <br /> duis enim velit mollit.</p>
                <button className="btn btn-error text-white">Purchase</button>
            </div>
            <div><img src="/public/images/slider/bike2.png" className="w-auto" /></div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full bg-red-400">
        <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-24">
            <div className="space-y-4 flex-1">
                <h2 className="text-3xl lg:text-6xl text-black font-bold">Ride-on XR V5 <br /> with Smile</h2>
                <p className="text-black">Amet minim mollit non deserunt ullamco <br />
                est sit aliqua dolor do amet sint. Velit officia consequat <br /> duis enim velit mollit.</p>
                <button className="btn btn-error text-white">Purchase</button>
            </div>
            <div><img src="/public/images/slider/bike3.png" className="w-auto" /></div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full bg-red-400">
        <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-24">
            <div className="space-y-4 flex-1">
                <h2 className="text-3xl lg:text-6xl text-black font-bold">Ride-on R15 V4 <br /> with Smile</h2>
                <p className="text-black">Amet minim mollit non deserunt ullamco <br />
                est sit aliqua dolor do amet sint. Velit officia consequat <br /> duis enim velit mollit.</p>
                <button className="btn btn-error text-white">Purchase</button>
            </div>
            <div><img src="/public/images/slider/bike1.png" className="w-auto" /></div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
