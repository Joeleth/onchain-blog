import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import axios from "axios";
import { serverUrl } from "../constant";
import Loader from "../components/Loading";

const FullPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/news/onchain-news`);
        const post = response.data.find((item) => item._id === id);
        setPost(post);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 mt-8 sm:mt-12 lg:mt-16 max-w-7xl">
      {post && (
        <div className="flex flex-col gap-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors self-start"
          >
            &larr; Back
          </button>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight sm:leading-snug">
            {post.title}
          </h1>

          <div className="w-full">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-lg object-cover shadow-md"
            />
          </div>

          <div className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>{post.summary}</p>
          </div>

          <div className="text-gray-500 text-xs sm:text-sm mt-4">
            <strong>Published on:</strong>{" "}
            {new Date(post.createdAt).toLocaleDateString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default FullPost;
