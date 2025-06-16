import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div
      className="min-h-screen bg-base-200 transition-colors duration-300"
      data-theme="forest"
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
};

export default App;
