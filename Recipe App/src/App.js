import Meal from "./pages/Meal";
import "./components/style.css";
import { Routes, Route } from "react-router-dom";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
