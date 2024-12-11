import React from "react";

const Faq = () => {
  return (
    <div className="mt-5">
      <h3 className="text-xl lg:text-5xl text-black mb-8 font-semibold text-center">
        Frequently Asked <span className="text-orange-400">Questions</span>{" "}
      </h3>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:gap-24 lg:flex-row">
          <img
            src="/public/images/others/faq.png"
            className="w-3/4 lg:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className="collapse collapse-arrow ">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium text-blue-950">
                What are the most important things I should know about riding a
                bike?
              </div>
              <div className="collapse-content">
                <p>
                  Safety First! Always obey the rules of the road. Obey all
                  traffic signals, signs, and laws. Get in the mindset of
                  “driving” your bike—not just “riding” your bike. This will
                  help you be a more focused and legally compliant bike rider.{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-blue-950">
                How can I tell if my helmet is old and I need a new one?
              </div>
              <div className="collapse-content">
                <p>
                  Safety First! Always obey the rules of the road. Obey all
                  traffic signals, signs, and laws. Get in the mindset of
                  “driving” your bike—not just “riding” your bike. This will
                  help you be a more focused and legally compliant bike rider.{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-blue-950">
                My bike has been in storage is it safe to ride?
              </div>
              <div className="collapse-content">
                <p>
                  Safety First! Always obey the rules of the road. Obey all
                  traffic signals, signs, and laws. Get in the mindset of
                  “driving” your bike—not just “riding” your bike. This will
                  help you be a more focused and legally compliant bike rider.{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-blue-950">
               What rules should I follow when riding my bike?
              </div>
              <div className="collapse-content">
                <p>
                  Safety First! Always obey the rules of the road. Obey all
                  traffic signals, signs, and laws. Get in the mindset of
                  “driving” your bike—not just “riding” your bike. This will
                  help you be a more focused and legally compliant bike rider.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
