import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Oauth from "../components/Oauth";
import axios from "axios";
import { serverUrl } from "../constant";


const SignIn = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: [e.target.value],
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${serverUrl}/api/auth/sign-in`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
   navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-16">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Sign In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              onChange={handleChange}
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
              placeholder="you@example.com"
              required
            />
          </div>
          {/* Password Input */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              onChange={handleChange}
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
              placeholder="••••••••"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Sign In
          </button>
          {/* Helper Links */}
          <div className="flex justify-between items-center text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Forgot Password?
            </a>
            <Link
              to={"/sign-up"}
              className="text-gray-600 hover:text-black transition-colors"
            >
              Create Account
            </Link>
          </div>
          <Oauth />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
