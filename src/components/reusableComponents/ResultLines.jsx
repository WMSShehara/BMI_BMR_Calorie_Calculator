import React from "react";

const ResultLines = ({ leftContent, rightContent}) => {
  return (
    <div className="grid grid-cols-2 gap-3 md:flex-row text-md font-medium mb-2">
      <div className="flex flex-col text-xl font-bold text-teal-800">{leftContent}</div>
      <div className="flex flex-col text-2xl text-sky-600">{rightContent}</div>
    </div>
  );
};

export default ResultLines;
