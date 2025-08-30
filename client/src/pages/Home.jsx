import React, { useState, useEffect } from "react";
import axios from "axios";
import { serverUrl } from "../constant";
import Loader from "../components/Loading";
import { Link } from "react-router-dom";

const Home = ({ filteredArticles }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/news/onchain-news`);
        if (!response.data) {
          return `error fetching news`;
        }
        const newsData = await response.data;

        setArticles(response.data);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // const articlesToRender =
  //   filteredArticles.length > 0 ? filteredArticles : articles;

  if (loading)
    return (
      <div className="place-items-center h-screen mt-100">
        <Loader />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 mt-11 sm:mt-12 lg:mt-16 max-w-7xl ">
      <ul className="space-y-4 sm:space-y-6 md:space-y-8">
        {articles.map((item) => (
          <li
            key={item._id}
            className="border-b pb-4 sm:pb-6 md:pb-8 last:border-b-0 flex flex-row items-stretch"
          >
            <div className="w-7/10 pr-4 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold leading-tight sm:leading-snug break-words">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1 sm:mt-2 md:mt-3 line-clamp-3">
                  {item.summary}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                  <strong>Published:</strong>
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>
              <Link
                to={`/post/${item._id}`}
                className="text-blue-500 hover:underline text-xs sm:text-sm md:text-base mt-2 sm:mt-3 md:mt-4 inline-block focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Read more
              </Link>
           
            </div>
            <div className="w-3/10 h-39">
              <img
                src={item.image}
                alt={item.title || "Article image"}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
