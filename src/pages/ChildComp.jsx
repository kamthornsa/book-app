import React from "react";

const ChildComp = ({ prop1, prop2, prop3, prop4 }) => {
  return (
    <>
      <h1>ข้อความ : {prop1} </h1>
      <p> ผลรวม : {prop2 + prop3}</p>
      <p>Array 1 : {prop4}</p>

      <p>
        Array 1 :{" "}
        {prop4.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </p>
    </>
  );
};

export default ChildComp;
