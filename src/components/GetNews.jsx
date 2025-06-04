import React, { useEffect, useState } from "react";

const GetNews = () => {
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

  return <div>GetNews</div>;
};

export default GetNews;
