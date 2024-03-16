import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Loader from "./components/Loader"; // Import your loader component
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { Parallax } from "react-parallax";
import Footer from "./pages/Footer";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Optional from "./pages/Optional";
import Room from "./pages/Room";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time with setTimeout
    setTimeout(() => {
      setLoading(false); // Set loading state to false after timeout
    }, 2000); // 2 seconds
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Parallax strength={400}>
                <About />
              </Parallax>

              <Optional />
              <Room />
              <Footer />
            </>
          }
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
