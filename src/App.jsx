import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Profile from "./components/Profile";
import RegisteredContent from "./components/RegisteredContent";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/content" element={<RegisteredContent />} />
        <Route path="/item/:id" element={<ProductDetail />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
