import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const CourseComponent = ({
  currentUser,
  setCurrentUser,
  setCourseID,
  setCourseTitle,
  setCourseDescription,
  setCoursePrice,
}) => {
  const navigate = useNavigate();
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  let [courseData, setCourseData] = useState(null);

  // 刪除課程(教師)
  const handleDelete = (e) => {
    //console.log(e.target.id);
    CourseService.deleteCourse(e.target.id)
      .then(() => {
        window.alert("課程刪除成功。重新導向到課程頁面。");
        setCourseData(null);
        let _id = currentUser.user._id;
        CourseService.get(_id)
          .then((data) => {
            setCourseData(data.data);
          })
          .catch((e) => {
            console.log(e);
          });
        navigate("/course");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // 課程更新(教師)
  const handleEdit = (e) => {
    //console.log(e.target.id);
    setCourseID(e.target.id);
    CourseService.getEdit(e.target.id)
      .then((data) => {
        setCourseTitle(data.data.title);
        setCourseDescription(data.data.description);
        setCoursePrice(data.data.price);
        window.alert("進入編輯頁面");
        navigate("/edit");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // 取消註冊(學生)
  const handleCancel = (e) => {
    CourseService.deleteEnroll(e.target.id)
      .then(() => {
        window.alert("取消註冊成功。重新導向到課程頁面。");
        setCourseData(null);
        let _id = currentUser.user._id;
        CourseService.getEnrolledCourse(_id)
          .then((data) => {
            setCourseData(data.data);
          })
          .catch((e) => {
            console.log(e);
          });
        navigate("/course");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
      if (currentUser.user.role == "instructor") {
        CourseService.get(_id)
          .then((data) => {
            setCourseData(data.data);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (currentUser.user.role == "student") {
        CourseService.getEnrolledCourse(_id)
          .then((data) => {
            setCourseData(data.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  }, []);

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>您必須先登入才能看到課程。</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleTakeToLogin}
          >
            回到登入頁面
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role === "instructor" && (
        <div>
          <h1>歡迎來到講師的課程頁面。</h1>
        </div>
      )}
      {currentUser && currentUser.user.role === "student" && (
        <div>
          <h1>歡迎來到學生的課程頁面。</h1>
        </div>
      )}
      {currentUser && courseData && courseData.length != 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}>
          {courseData.map((course) => {
            return (
              <div className="card" style={{ width: "20rem", margin: "1rem" }}>
                <div className="card-body">
                  <h5 className="card-title">課程名稱：{course.title}</h5>
                  <h6 className="card-title">課程內容：</h6>
                  <p
                    style={
                      ({ margin: "0.5rem 0rem" },
                      { border: "0.1px solid black" })
                    }
                    className="card-text rounded py-2 px-1 pb-5"
                  >
                    {course.description}
                  </p>
                  <p style={{ margin: "0.5rem 0rem" }}>
                    學生人數：{course.students.length}
                  </p>
                  <p style={{ margin: "0.5rem 0rem" }}>
                    課程價格：{course.price}
                  </p>
                  {currentUser.user.role != "student" && (
                    <a
                      href="#"
                      className="card-link btn btn-primary"
                      id={course._id}
                      onClick={handleDelete}
                    >
                      刪除課程
                    </a>
                  )}
                  {currentUser.user.role != "student" && (
                    <a
                      id={course._id}
                      href="#"
                      className="card-link btn btn-primary"
                      onClick={handleEdit}
                    >
                      編輯課程
                    </a>
                  )}
                  {currentUser.user.role != "instructor" && (
                    <a
                      href="#"
                      className="card-link btn btn-primary"
                      id={course._id}
                      onClick={handleCancel}
                    >
                      取消註冊
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CourseComponent;
