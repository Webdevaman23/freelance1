import { Routes, Route } from "react-router-dom";
// import Homepage from "./components/pages/homepage";
import Login from "./components/pages/auth/login";
import Register from "./components/pages/auth/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ProtectedRoutes from "./components/routes/protectedRoutes";
import PublicRoutes from "./components/routes/publicRoutes";
// import Consumer from "./components/pages/auth/";
// import AdminHome from "./components/pages/Admin/AdminHome";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
     
        {/* <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <AdminHome />
            </ProtectedRoutes>
          }
        /> */}
        {/* <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Homepage />
            </ProtectedRoutes>
          }
        /> */}
        {/* <Route
          path="/consumer"
          element={
            <ProtectedRoutes>
              <Consumer />
            </ProtectedRoutes>
          }
        /> */}
        <Route
          path="/Login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/Register"
          element={
            <PublicRoutes>
              <Register />
            </PublicRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
