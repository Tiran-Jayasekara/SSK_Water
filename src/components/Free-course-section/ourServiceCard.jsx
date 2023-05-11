import React from "react";
import { Link } from "react-router-dom";

const ourServiceCard = (props) => {
  const { imgUrl, title } = props.item;

  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        
        <Link to="/store"><img src={imgUrl} alt="" className="w-100" /></Link>
        
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
