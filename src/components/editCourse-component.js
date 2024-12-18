import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const EditCourseComponent = ({
  currentUser,
  setCurrentUser,
  courseID,
  courseTitle,
  courseDescription,
  coursePrice,
}) => {
  let [newTitle, setNewTitle] = useState(courseTitle);
  let [newDescription, setNewDescription] = useState(courseDescription);
  let [newPrice, setNewPrice] = useState(coursePrice);
  let [message, setMessage] = useState("");

  const navigate = useNavigate();
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  const handleNewTitle = (e) => {
    setNewTitle(e.target.value);
  };
  const handleNewDesciption = (e) => {
    setNewDescription(e.target.value);
  };
  const handleNewPrice = (e) => {
    setNewPrice(e.target.value);
  };

  // 編輯課程
  const updateCourse = (e) => {
    //console.log(e.target);
    CourseService.update(courseID, newTitle, newDescription, newPrice)
      .then(() => {
        window.alert("課程內容更新成功 !");
        navigate("/course");
      })
      .catch((e) => {
        //console.log(e.response.data);
        setMessage(e.response.data);
      });
  };

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>在更新課程內容之前，您必須先登錄。</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleTakeToLogin}
          >
            帶我進入登錄頁面。
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role !== "instructor" && (
        <div>
          <p>只有講師可以更新課程內容。</p>
        </div>
      )}
      {currentUser && (
        <div className="form-group">
          <label htmlFor="exampleforTitle">課程標題：</label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleforTitle"
            onChange={handleNewTitle}
            value={newTitle}
          />
          <br />
          <label htmlFor="exampleforContent">課程內容：</label>
          <textarea
            name="content"
            type="text"
            className="form-control"
            id="exampleforContent"
            onChange={handleNewDesciption}
            value={newDescription}
          />
          <br />
          <label htmlFor="exampleforPrice">價格：</label>
          <input
            name="price"
            type="number"
            className="form-control"
            id="exampleforPrice"
            onChange={handleNewPrice}
            value={newPrice}
          />
          <br />
          <button onClick={updateCourse} className="btn btn-primary">
            編輯完成
          </button>
          <br />
          <br />
          {message && (
            <div className="alert alert-warning" role="alert">
              {message}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EditCourseComponent;
