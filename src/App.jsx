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
import { PublicRoute } from "./routes/PublicRoute.jsx";
import { PrivateRoute } from "./routes/PrivateRoute.jsx";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshThunk } from "./redux/authSlice/operations.js";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <AppContainer>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/register" element={<PublicRoute><RegisterPage/></PublicRoute>}></Route>
          <Route path="/login" element={<PublicRoute><LoginPage/></PublicRoute>}></Route>
        </Route>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<AuthLayout/>} />
          <Route path="/recommended" element={<PrivateRoute><RecommendedPage/></PrivateRoute>}></Route>
          <Route path="/library" element={<PrivateRoute><LibraryPage/></PrivateRoute>}></Route>
          <Route path="/reading" element={<PrivateRoute><ReadingPage/></PrivateRoute>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </AppContainer>
  );
}

export default App;
