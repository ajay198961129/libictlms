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
import LoginPage from "./admin/pages/Login";
import Students from "./admin/pages/Students";
import Courses from "./admin/pages/Courses";
import Content from "./admin/pages/Content";
import Assesments from "./admin/pages/Assesments";
import Quiz from "./admin/pages/Quiz";
import Institutes from "./admin/pages/Institutes";
import AddCourse from "./admin/pages/AddCourse";
import AddCategory from "./admin/pages/AddCategory";
import AddChapter from "./admin/pages/AddChapter";
import AddAssesment from "./admin/pages/AddAssesment";
import AddQuiz from "./admin/pages/AddQuiz";
import AddInstitute from "./admin/pages/AddInstitute";
import AddContent from "./admin/pages/AddContent";
import Category from "./admin/pages/Category";
import Chapter from "./admin/pages/Chapter";

function App() {
  const userId = localStorage.getItem("userId");
  const adminUserId = localStorage.getItem("adminUserId");
  const [isLogin, setIsLogin] = useState(false);
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  const checkLogin = () => {
    if (userId != null) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  const checkAdminLogin = () => {
    if (adminUserId != null) {
      setIsAdminLogin(true);
    } else {
      setIsAdminLogin(false);
    }
  };

  useEffect(() => {
    checkLogin();
    checkAdminLogin();
  }, []);

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
        <Route path="/admin" element={<LoginPage />} />
        <Route
          path="/admin/students"
          element={
            isAdminLogin ? (
              <AdminLayout>
                <Students />
              </AdminLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            isAdminLogin ? (
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/admin/courses"
          element={
            isAdminLogin ? (
              <AdminLayout>
                <Courses />
              </AdminLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/admin/content"
          element={
            isAdminLogin ? (
              <AdminLayout>
                <Content />
              </AdminLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/admin/category"
          element={
            isAdminLogin ? (
              <AdminLayout>
                <Category />
              </AdminLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/admin/chapter"
          element={
            isAdminLogin ? (
              <AdminLayout>
                <Chapter />
              </AdminLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/admin/assesment"
          element={
            isAdminLogin ? (
              <AdminLayout>
                <Assesments />
              </AdminLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/admin/quizs"
          element={
            isAdminLogin ? (
              <AdminLayout>
                <Quiz />
              </AdminLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/admin/institutes"
          element={
            isAdminLogin ? (
              <AdminLayout>
                <Institutes />
              </AdminLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/admin/create-course"
          element={
            isAdminLogin ? (
              <AdminLayout>
                <AddCourse />
              </AdminLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/admin/add-content"
          element={
            isAdminLogin ? (
              <AdminLayout>
                <AddContent />
              </AdminLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/admin/create-category"
          element={
            isAdminLogin ? (
              <AdminLayout>
                <AddCategory />
              </AdminLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/admin/create-chapter"
          element={
            isAdminLogin ? (
              <AdminLayout>
                <AddChapter />
              </AdminLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/admin/create-assesment"
          element={
            isAdminLogin ? (
              <AdminLayout>
                <AddAssesment />
              </AdminLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/admin/create-quiz"
          element={
            isAdminLogin ? (
              <AdminLayout>
                <AddQuiz />
              </AdminLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/admin/create-institute"
          element={
            isAdminLogin ? (
              <AdminLayout>
                <AddInstitute />
              </AdminLayout>
            ) : (
              <LoginPage />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
