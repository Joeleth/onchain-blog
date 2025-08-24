import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { serverUrl } from "../constant";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userSlice";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleSignOut = async () => {
    try {
      await axios.post(`${serverUrl}/api/auth/sign-out`);
      localStorage.removeItem("Access_Token");
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-16">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          profile
        </h2>
        <form className="space-y-4">
          <img
            className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 mb-3"
            src={currentUser.avatar}
            alt="profile"
          />

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
              required
              defaultValue={currentUser.email}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              nickname
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
              required
              defaultValue={currentUser.username}
            />
          </div>
        </form>
        <h6
          onClick={handleSignOut}
          className="text-red-700 transition-colors mt-2 cursor-pointer"
        >
          sign out
        </h6>
      </div>
    </div>
  );
}
export default Profile;
