import { Route, Routes } from "react-router-dom";
import './App.styled.js';
import { AuthLayout } from "./components/Layouts/AuthLayout";
import { MainLayout } from "./components/Layouts/MainLayout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RecommendedPage } from "./pages/RecommendedPage/RecommendedPage";
import { LibraryPage } from "./pages/LibraryPage/LibraryPage";
import { AppContainer } from "./App.styled.js";
import { ReadingPage } from "./pages/ReadingPage/ReadingPage.jsx";


function App() {

  return (
    <AppContainer>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/register" element={<RegisterPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
        </Route>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<AuthLayout/>} />
          <Route path="/recommended" element={<RecommendedPage/>}></Route>
          <Route path="/library" element={<LibraryPage/>}></Route>
          <Route path="/reading" element={<ReadingPage/>}></Route>
        </Route>
      </Routes>
    </AppContainer>
  );
}

export default App;
