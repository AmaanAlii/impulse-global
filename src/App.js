import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import internalLinks from "./internalLinks";

import NavBar from "./components/navBar/navBar";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App flex justify-center items-center w-full flex-col bg-primaryBgDark overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route path={internalLinks.home} element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
