import "./CSS/App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

import Form from './pages/Formpage';
import './CSS/Form.css';
import Formpage from "./pages/Formpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/form" element={<Formpage />} />
      </Routes>

      <div className="App">
      {/* < /> */}
      </div>

    </>
  );
}

export default App;
