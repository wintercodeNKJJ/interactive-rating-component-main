import React from "react";
import Result from "../task/images/illustration-thank-you.svg";

const Results = ({ rate }) => {
  return (
    <section>
      <img src={Result} alt="" className="w-[180px] mx-auto my-4" />
      <h2 className=" bg-[#252E38] text-center p-1 px-3 w-fit mx-auto rounded-full text-[#FC7613]">
        You selected {rate} out of 5
      </h2>
      <h1 className="title text-center">Thank you!</h1>
      <p className="note text-center mb-4">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </section>
  );
};

export default Results;
