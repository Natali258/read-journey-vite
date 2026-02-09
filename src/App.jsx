import { Route, Routes } from "react-router-dom";
import './App.css';
import { AuthLayout } from "./components/Layouts/AuthLayout";
import { MainLayout } from "./components/Layouts/MainLayout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RecommendedPage } from "./pages/RecommendedPage/RecommendedPage";
import { LibraryPage } from "./pages/LibraryPage/LibraryPage";
import { MyBookPage } from "./pages/MyBookPage";


function App() {

  return (
    <div className="app">
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/register" element={<RegisterPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
        </Route>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<AuthLayout/>} />
          <Route path="/recommended" element={<RecommendedPage/>}></Route>
          <Route path="/library" element={<LibraryPage/>}></Route>
          <Route path="/reading" element={<MyBookPage/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
