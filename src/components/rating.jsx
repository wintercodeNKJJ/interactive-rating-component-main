import React from "react";
import star from "../task/images/icon-star.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Rating = ({ send }) => {
  const rate = [1, 2, 3, 4, 5];

  const [selected, setSelected] = useState(0);
  const select = (choic) => {
    setSelected(choic);
    send(choic);
  };

  return (
    <section>
      <div className="star">
        <img src={star} alt="star" />
      </div>
      <h1 className="title">How did we do?</h1>
      <p className="note">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rate">
        {rate.map((item, i) => (
          <div
            key={i}
            onClick={() => select(item)}
            className={selected === item ? "selected" : ""}
          >
            {item}
          </div>
        ))}
      </div>
      <Link to={"/sucess"} type="button" className="submit">
        SUBMIT
      </Link>
    </section>
  );
};

export default Rating;
