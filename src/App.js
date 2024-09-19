import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import internalLinks from "./internalLinks";

import NavBar from "./components/navBar/navBar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Careers from "./Pages/Careers/Careers";
import Blogs from "./Pages/Blog/Blogs";
import SingleBlog from "./Pages/Blog/SingleBlog";

function App() {
  return (
    <Router>
      <div className="App flex justify-center items-center w-full flex-col bg-primaryBgDark overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route path={internalLinks.home} element={<Home />} />
          <Route path={internalLinks.contact} element={<Contact />} />
          <Route path={internalLinks.about} element={<About />} />
          <Route path={internalLinks.services} element={<Services />} />
          <Route path={internalLinks.careers} element={<Careers />} />
          <Route path={internalLinks.blog} element={<Blogs />} />
          <Route
            path={`${internalLinks.singleBlog}/:id`}
            element={<SingleBlog />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
