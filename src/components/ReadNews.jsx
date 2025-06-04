import React from "react";
import { useState, useEffect } from "react";

const ReadNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/news.json") // Assuming news.json is in the public folder
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const response = await fetch(
  //         "/news.json" // Assuming news.json is in the public folder
  //       );
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setNews(data.articles);
  //     } catch (error) {
  //       console.error("Error fetching news:", error);
  //     }
  //   };
  //   fetchNews();
  // }, []);

  return (
    <>
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">ข่าวสาร</h1>
        <ul className="list-disc pl-5">
          {news.map((item, index) => (
            <li key={index} className="mb-2">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ReadNews;
