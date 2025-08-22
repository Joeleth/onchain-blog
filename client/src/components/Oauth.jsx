import axios from "axios";
import { app } from "../firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { serverUrl } from "../constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";

const Oauth = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const signUpWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const response = await axios.post(`${serverUrl}/api/auth/google-auth`, {
        username: result.user.fullName,
        email: result.user.email,
      });
      dispatch(setUser(response.data))
      navigate("/");
      if (!response) {
        throw new Error(error);
      }
      console.log(response);
    } catch (error) {
      console.log("error signing up with google", error);
    }
  };

  return (
    <button
      onClick={signUpWithGoogle}
      className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-black border border-gray-400 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <FaGoogle className="text-2xl mr-2" style={{ color: "#4285F4" }} />
      <span className="text-lg font-medium">Continue with Google</span>
    </button>
  );
};

export default Oauth;
