import React from "react";

const ourServiceCard = (props) => {
  const { imgUrl, title } = props.item;

  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
        {/* <button className="btn free__btn">Free</button> */}
      </div>

      <div className="free__course__details">
        <h6>{title}</h6>

        <div className=" d-flex align-items-center gap-5">
          
        </div>
      </div>
    </div>
  );
};

export default ourServiceCard;
