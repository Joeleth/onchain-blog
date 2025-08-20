import React, { useState, useEffect } from "react";
import axios from "axios";
import { serverUrl } from "../constant";
import CryptoChainLoader from "../components/Loading";

const Home = () => {
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

        setArticles(response.data.articles);
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
      <div className="place-items-center h-screen mt-100">
        <CryptoChainLoader />
      </div>
    );
  //   if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 mt-8 sm:mt-12 lg:mt-16 max-w-7xl">
      {}
      <ul className="space-y-4 sm:space-y-6 md:space-y-8">
        {articles.map((article, index) => (
          <li
            key={index}
            className="border-b pb-4 sm:pb-6 md:pb-8 last:border-b-0"
          >
            <img
              src={article.urlToImage}
              alt={article.title || "Article image"}
              className="w-full h-auto max-h-40 sm:max-h-48 md:max-h-56 object-cover rounded-lg mb-3 sm:mb-4 md:mb-6"
            />
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold leading-tight sm:leading-snug break-words">
              {article.title}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1 sm:mt-2 md:mt-3 line-clamp-3">
              {article.description}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
              <strong>Published:</strong>{" "}
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-xs sm:text-sm md:text-base mt-2 sm:mt-3 md:mt-4 inline-block focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
