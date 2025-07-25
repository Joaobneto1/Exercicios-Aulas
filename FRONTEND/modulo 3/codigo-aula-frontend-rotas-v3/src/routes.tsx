import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />

      <Route element={
        <>
          <Header />
          <ProtectedRoutes />
        </>
      }>
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Home />} />
      </Route>
      <Route path="*" element={<h1>Página não encontrada (404)</h1>} />
    </Routes>
  )
}

function ProtectedRoutes() {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to="/signin" />
}