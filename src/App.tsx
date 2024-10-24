import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Layout = lazy(() => import("./Pages/Layout"));
const Home = lazy(() => import("./Pages/Home"));
const Register = lazy(() => import("./Pages/Register"));
const Login = lazy(() => import("./Pages/Login"));
const NoPage = lazy(() => import("./Pages/NoPage"));
const Profile = lazy(() => import("./Pages/Profile"));
const Counter = lazy(() => import("./Pages/Counter"));
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="counter" element={<Counter />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;
