import React from "react";

const ResourceContainer = ({ data }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
        }}
      >
        {data.content.map((item, idx) => {
          return <div key={idx}>{item}</div>;
        })}
      </div>
    </>
  );
};

export default ResourceContainer;
