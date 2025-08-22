import { useState } from "react";
import Oauth from "../components/Oauth";
import axios from "axios";
import { serverUrl } from "../constant";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${serverUrl}/api/auth/sign-up`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success === false) {
        return response.data.message;
      }
      console.log(dispatch(setUser(response.data)));
      navigate("/");
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-16">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              username
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
              placeholder="joe doe"
              required
            />
          </div>
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
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
              type="password"
              id="password"
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
            Sign Up
          </button>

          {/* Helper Links */}
          <div className="flex justify-between items-center text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Forgot Password?
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Create Account
            </a>
          </div>
          <Oauth />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
