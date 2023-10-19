import React from "react";

const ImageNode = ({ data }) => {
  return (
    <div>
      <img src={data.imageSrc} alt="Node Image" />
    </div>
  );
};

export default ImageNode;
