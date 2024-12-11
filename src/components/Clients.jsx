import React from "react";

const Clients = () => {
  return (
    <div >
      <h3 className="text-xl lg:text-5xl text-black mb-8 font-semibold text-center">
        Happy <span className="text-orange-400">Clients says</span>{" "}
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:p-4">
        <div className="card card-compact border-b-4 lg:border-2 border-gray-400 p-9">
          <figure>
            <img
              className="w-36"
              src="/public/images/others/user-1.png"
              alt=""
            />
          </figure>
          <div className="card-body">
            <p className="text-center">
              Slate helps you see how <br /> many more days you need <br /> to
              work to reach your financial <br />
              goal for the month and year.
            </p>
            <div className="rating justify-center">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="card-actions items-center flex flex-col space-y-4 mt-4">
                <h4 className="font-semibold text-blue-400">Regina Miles</h4>
                <h5 className="font-medium text-black">Banker</h5>
            </div>
          </div>
        </div>
        <div className="card card-compact border-b-4 lg:border-2 border-gray-400 p-9 ">
          <figure>
            <img
              className="w-36"
              src="/public/images/others/user-2.png"
              alt=""
            />
          </figure>
          <div className="card-body">
            <p className="text-center">
              Slate helps you see how <br /> many more days you need <br /> to
              work to reach your financial <br />
              goal for the month and year.
            </p>
            <div className="rating justify-center">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="card-actions items-center flex flex-col space-y-4 mt-4">
                <h4 className="font-semibold text-blue-400">Xing Hua</h4>
                <h5 className="font-medium text-black">Doctor</h5>
            </div>
          </div>
        </div>
        <div className="card card-compact border-b-4 lg:border-2 border-gray-400 p-6 ">
          <figure>
            <img
              className="w-36"
              src="/public/images/others/user-3.png"
              alt=""
            />
          </figure>
          <div className="card-body">
            <p className="text-center">
              Slate helps you see how <br /> many more days you need <br /> to
              work to reach your financial <br />
              goal for the month and year.
            </p>
            <div className="rating justify-center">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="card-actions items-center flex flex-col space-y-4 mt-4">
                <h4 className="font-semibold text-blue-400">Hammer Stone</h4>
                <h5 className="font-medium text-black">UX designer</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
