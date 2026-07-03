import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "./components/Layouts/AuthLayout";
import { MainLayout } from "./components/Layouts/MainLayout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RecommendedPage } from "./pages/RecommendedPage/RecommendedPage";
import { LibraryPage } from "./pages/LibraryPage/LibraryPage";
import { ReadingPage } from "./pages/ReadingPage/ReadingPage.jsx";
import { PublicRoute } from "./routes/PublicRoute.jsx";
import { PrivateRoute } from "./routes/PrivateRoute.jsx";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshThunk } from "./redux/authSlice/operations.js";
import { selectIsLoading } from "./redux/authSlice/AuthSlice.js";
import { Loader } from "./components/Loader/Loader.jsx";


function App() {
  const isLoading = useSelector(selectIsLoading);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
    
  return isLoading ? (<Loader/>) : (
    <div>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/" element={<PublicRoute><LoginPage/></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><RegisterPage/></PublicRoute>}></Route>
          <Route path="/login" element={<PublicRoute><LoginPage/></PublicRoute>}></Route>
        </Route>
        <Route element={<MainLayout/>}>
          <Route path="/recommended" element={<PrivateRoute><RecommendedPage/></PrivateRoute>}></Route>
          <Route path="/library" element={<PrivateRoute><LibraryPage/></PrivateRoute>}></Route>
          <Route path="/reading/:id" element={<PrivateRoute><ReadingPage/></PrivateRoute>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
