import React from "react";

const ButtonEvent = ({ addCountry, update }) => {
  return (
    <div className="buttons content">
      <button onClick={addCountry}>ADD</button>
      <button onClick={update}>UPDATE</button>
    </div>
  );
};

export default ButtonEvent;
