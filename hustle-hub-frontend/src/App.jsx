import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Mentors from "./pages/Mentors";
import Books from "./pages/Books";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div>
      <h1>Hustle Hub</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/books" element={<Books />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;