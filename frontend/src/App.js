import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";
import About from "./pages/About";
import CourseDetails from "./pages/CourseDetails";
import CoursePlayer from "./pages/CoursePlayer";
import MyCourse from "./pages/MyCourse";
import Profile from "./pages/Profile";
import NotFound from "./pages/404";
import Dashboard from "./admin/pages/Dashboard";
import AdminLayout from "./layout/adminLayout";

function App() {
  const userId = localStorage.getItem("userId");
  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = () => {
    if (userId != null) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, [userId]);

  function WebsiteLayout({ children }) {
    return (
      <>
        <div className="App">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Website Routes */}
        <Route
          path="/"
          element={
            <WebsiteLayout>
              <HomePage />
            </WebsiteLayout>
          }
        />
        <Route
          path="/about-us"
          element={
            <WebsiteLayout>
              <About />
            </WebsiteLayout>
          }
        />
        <Route
          path="/course-details/:courseId"
          element={
            <WebsiteLayout>
              <CourseDetails />
            </WebsiteLayout>
          }
        />
        <Route
          path="/courses"
          element={
            <WebsiteLayout>
              <CoursesPage />
            </WebsiteLayout>
          }
        />
        <Route
          path="/login"
          element={
            <WebsiteLayout>
              <Login />
            </WebsiteLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <WebsiteLayout>
              <Signup />
            </WebsiteLayout>
          }
        />
        <Route
          path="/course-player/:courseId"
          element={
            isLogin ? (
              <WebsiteLayout>
                <CoursePlayer />
              </WebsiteLayout>
            ) : (
              <WebsiteLayout>
                <Login />
              </WebsiteLayout>
            )
          }
        />
        <Route
          path="/mycourse"
          element={
            isLogin ? (
              <WebsiteLayout>
                {" "}
                <MyCourse />
              </WebsiteLayout>
            ) : (
              <WebsiteLayout>
                <Login />
              </WebsiteLayout>
            )
          }
        />
        <Route
          path="/profile"
          element={
            isLogin ? (
              <WebsiteLayout>
                <Profile />
              </WebsiteLayout>
            ) : (
              <WebsiteLayout>
                <Login />
              </WebsiteLayout>
            )
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/user"
          element={
            <AdminLayout>
              <h1>user</h1>
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
