import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const EnrollComponent = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  let [searchInput, setSearchInput] = useState("");
  let [searchResult, setSearchResult] = useState(null);

  const handleTakeToLogin = () => {
    navigate("/login");
  };

  // 搜尋課程(輸入)
  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  // 搜尋課程(按鈕)
  const handleSearch = () => {
    CourseService.getCourseByName(searchInput)
      .then((data) => {
        //console.log(data);
        setSearchResult(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // 註冊課程
  const handleEnroll = (e) => {
    CourseService.enroll(e.target.id)
      .then(() => {
        window.alert("課程註冊成功。重新導向到課程頁面。");
        navigate("/course");
      })
      .catch((e) => {
        if (e.response && e.response.data === "你已註冊過此課程") {
          window.alert("你已註冊過此課程。");
        } else {
          window.alert("註冊失敗，請稍後再試。");
        }
        console.log(e);
      });
  };

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>您必須先登入才能開始註冊課程。</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleTakeToLogin}
          >
            回到登入頁面
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role == "instructor" && (
        <div>
          <h1>只有學生才能註冊課程。</h1>
        </div>
      )}
      {currentUser && currentUser.user.role == "student" && (
        <div className="search input-group mb-3">
          <input
            type="text"
            className="form-control"
            onChange={handleChangeInput}
          />
          <button onClick={handleSearch} className="btn btn-primary">
            搜尋課程
          </button>
        </div>
      )}
      {currentUser && searchResult && searchResult.length != 0 && (
        <div>
          {/* <p>這是我們從 API 返回的數據: </p> */}
          {searchResult.map((course) => {
            return (
              <div key={course._id} className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">課程名稱：{course.title}</h5>
                  <h5 className="card-title">課程內容：</h5>
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
                  <p style={{ margin: "0.5rem 0rem" }}>
                    課程講師：{course.instructor.username}
                  </p>
                  <a
                    href="#"
                    onClick={handleEnroll}
                    className="card-text btn btn-primary"
                    id={course._id}
                  >
                    註冊課程
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EnrollComponent;
