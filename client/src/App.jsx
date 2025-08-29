import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

import { useState } from "react";
import FullPost from "./pages/FullPost";

function App() {
  const [filteredArticles, setFilteredArticles] = useState([]);
  return (
    <BrowserRouter>
      <Header setFilteredArticles={setFilteredArticles} />
      <Routes>
        <Route
          path="/"
          element={<Home filteredArticles={filteredArticles} />}
        />
        <Route path="/post/:id" element={<FullPost />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
