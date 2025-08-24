import React, { useState, useEffect } from "react";

import axios from "axios";
import { serverUrl } from "../constant";
import Loader from "../components/Loading";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allArticles, setAllArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/news/onchain-news`);
      const data = response.data.articles;
      setAllArticles(data);
      setFilteredArticles(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchArticles();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/news/onchain-news`);
        if (!response.data) {
          return `error fetching news`;
        }

        setArticles(response.data.articles);
        const data = response.data.articles;
        console.log(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading)
    return (
      <div className="grid place-items-center h-screen ">
        <Loader />
      </div>
    );
  //   if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 mt-8 sm:mt-12 lg:mt-16 max-w-7xl">
      <ul className="space-y-4 sm:space-y-6 md:space-y-8">
        {articles.map((article, index) => (
          <li
            key={index}
            className="border-b pb-4 sm:pb-6 md:pb-8 last:border-b-0 flex flex-row items-stretch"
          >
            <div className="w-7/10 pr-4 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold leading-tight sm:leading-snug break-words">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1 sm:mt-2 md:mt-3 line-clamp-3">
                  {article.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                  <strong>Published:</strong>
                  {new Date(article.publishedAt).toLocaleDateString()}
                </p>
              </div>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-xs sm:text-sm md:text-base mt-2 sm:mt-3 md:mt-4 inline-block focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Read more
              </a>
            </div>
            <div className="w-3/10 h-40">
              <img
                src={article.urlToImage}
                alt={article.title || "Article image"}
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
// export {changeTitle}
