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

function App() {
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  let [courseID, setCourseID] = useState("");
  let [courseTitle, setCourseTitle] = useState("");
  let [courseDescription, setCourseDescription] = useState("");
  let [coursePrice, setCoursePrice] = useState(0);

  // let _id = currentUser.user._id;
  // let editData = (_id) => {
  //   CourseService.get(_id)
  //     .then((data) => {
  //       setCourseID(data.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
  // editData(_id);

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
              <LoginComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="profile"
            element={
              <ProfileComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="course"
            element={
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
              <PostCourseComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="enroll"
            element={
              <EnrollComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="edit"
            element={
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
