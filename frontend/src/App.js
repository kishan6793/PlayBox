import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Deshboard from "./components/Deshboard";
import MenuPage from "./pages/MenuPage";
import Formpage from "./pages/Formpage";
import Platform from "./components/plateform";
import LanguagePage from "./pages/LanguagePage";
import MoviePage from "./pages/MoviePage";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [selectedPage, setSelectedPage] = useState("Dashboard");
  const location = useLocation();

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <>
      {location.pathname !== "/" && <Sidebar onPageChange={handlePageChange} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/form" element={<Formpage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/languages" element={<LanguagePage />} />
        <Route path="/platform" element={<Platform />} />
      </Routes>
      <div className="App">{/* < /> */}</div>
    </>
  );
}
