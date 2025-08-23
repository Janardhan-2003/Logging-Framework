import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashBoard from "./pages/Dashboard";
import Layout from "./components/Layout";
import MyApps from "./pages/MyApps";
import Logs from "./pages/Logs";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashBoard />} />
          <Route path="/myapps" element={<MyApps />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
