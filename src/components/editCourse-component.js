import React, { useEffect, useState } from "react";
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
  let [newtitle, setNewTitle] = useState(courseTitle);
  let [newdescription, setNewDescription] = useState(courseDescription);
  let [newprice, setNewPrice] = useState(coursePrice);
  let [message, setMessage] = useState("");

  //const [editData, setEditData] = useState(null);

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

  const updateCourse = (e) => {
    //console.log(e.target);
    //console.log({ newtitle, newdescription, newprice });
    CourseService.update(courseID, newtitle, newdescription, newprice)
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
          <label for="exampleforTitle">課程標題：</label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleforTitle"
            onChange={handleNewTitle}
            value={newtitle}
          />
          <br />
          <label for="exampleforContent">課程內容：</label>
          <textarea
            className="form-control"
            id="exampleforContent"
            name="content"
            onChange={handleNewDesciption}
            value={newdescription}
          />
          <br />
          <label for="exampleforPrice">價格：</label>
          <input
            name="price"
            type="number"
            className="form-control"
            id="exampleforPrice"
            onChange={handleNewPrice}
            value={newprice}
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
