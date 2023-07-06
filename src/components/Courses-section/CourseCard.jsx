import React, { useState } from "react";


const CourseCard = (props) => {
  const { imgUrl, title } = props.item;

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

        <div className="d-flex price">
        </div>
      </div>
    </div>
    </>
  );
};

export default CourseCard;
