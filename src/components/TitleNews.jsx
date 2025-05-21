import React from "react";

const TitleNews = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-800 mt-1 hover:text-blue-600 transition duration-200 relative">
        {title}
        <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2 rounded"></span>
      </h1>
    </div>
  );
};

export default TitleNews;
