import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import HomeComponent from "./components/home-component";
import RegisterComponent from "./components/register-component";
import LoginComponent from "./components/login-component";
import ProfileComponent from "./components/profile-component";
import AuthService from "./services/auth.service";
import CourseComponent from "./components/course-component";
import PostCourseComponent from "./components/postCourse-component";
import EnrollComponent from "./components/enroll-component";
import EditCourseComponent from "./components/editCourse-component";
import Aboutcomponent from "./components/about-component";

function App() {
  // 確認使用者身分
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  // 更新課程內容
  let [courseID, setCourseID] = useState("");
  let [courseTitle, setCourseTitle] = useState("");
  let [courseDescription, setCourseDescription] = useState("");
  let [coursePrice, setCoursePrice] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        >
          <Route index element={<HomeComponent />} />
          <Route path="register" element={<RegisterComponent />} />
          <Route
            path="login"
            element={
              //登入
              <LoginComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="profile"
            element={
              // 個人頁面
              <ProfileComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="course"
            element={
              // 課程頁面
              <CourseComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                setCourseID={setCourseID}
                setCourseTitle={setCourseTitle}
                setCourseDescription={setCourseDescription}
                setCoursePrice={setCoursePrice}
              />
            }
          />
          <Route
            path="postCourse"
            element={
              // 新增課程
              <PostCourseComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="enroll"
            element={
              // 註冊課程
              <EnrollComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="edit"
            element={
              // 更新課程
              <EditCourseComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                courseID={courseID}
                courseTitle={courseTitle}
                courseDescription={courseDescription}
                coursePrice={coursePrice}
              />
            }
          />
          <Route path="about" element={<Aboutcomponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
