import React, { useState } from "react";


const CourseCard = (props) => {
  const { imgUrl, title, Price, customer, rating } = props.item;

  const [rotation, setRotation] = useState(0);

  const handleMouseEnter = () => {
    setRotation(180);
  };

  const handleMouseLeave = () => {
    setRotation(0);
  };

  return (
    <>
      <div
      className="course-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imgUrl}
        alt={title}
        style={{ transform: `rotateY(${rotation}deg)` }}
      />
      <div className="course__details">
        <h6 className="course__title">{title}</h6>

        <div className="d-flex ">
          <p className="lesson d-flex gap-1">
            <i className="ri-book-open-line"></i> {Price} RS
          </p>

          <p className="para d-flex gap-1">
            <i className="ri-user-line"></i> {customer} Sold
          </p>
        </div>

        <div className=" d-flex">
          <p className="rating d-flex gap-1">
            <i className="ri-star-fill"></i> {rating}
          </p>

          <p className="para2 d-flex gap-1">
            <a href="google.com"> Order Now</a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default CourseCard;
