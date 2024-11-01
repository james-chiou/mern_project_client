import React from "react";

const Aboutcomponent = () => {
  return (
    <main>
      <div className="ps-3 bg-light rounded-3">
        <div className="container-fluid py-3">
          <h1 className="display-6 fw-bold">Projrct 9 - 學習系統</h1>
          <ul className="list-unstyled">
            <li className="col-md-10 fs-5">
              <ol>
                <li className="col-md-10 fs-5 my-2">
                  本專案使用React.js作為前端框架，其負責顯示各頁面的內容。例如:
                  登入後會在個人頁面看見個人資料、在課程頁面可以看到使用者所創建或註冊的課程。
                </li>
                <li className="col-md-10 fs-5 my-2">
                  Node.js作為後端框架，用來處理Route、API、資料傳遞、資料加密等。而MongoDB則是處理儲存資料的部分。
                </li>
              </ol>
            </li>
          </ul>
          <ul className="list-unstyled">
            <li className="col-md-10 fs-5">
              本系統在註冊會員時，除了帳號密碼之外還須填寫想註冊的身分為教師或是學生。
              <img style={{ width: "40%" }} src="./project9-1.jpg" alt="" />
              <ol>
                <li className="col-md-10 fs-5 my-2">
                  教師:
                  您可以在新增課程頁面進行新課程的建立。而在課程頁面您可以看見已創建的課程，也可以進行課程內容的編輯或將課程刪除。
                </li>
                <img style={{ width: "40%" }} src="./project9-2.jpg" alt="" />
                <li className="col-md-10 fs-5">
                  學生:
                  您可以在註冊課程頁面進行搜尋並註冊課程。註冊完後，在課程頁面可以看見已註冊的課程，您也可以在課程頁面進行取消註冊課程。
                </li>
                <img style={{ width: "50%" }} src="./project9-3.jpg" alt="" />
                <br />
                <img style={{ width: "50%" }} src="./project9-4.jpg" alt="" />
                <li className="col-md-10 fs-5 text-danger my-2">
                  因免費發佈網頁的網站的政策為"後端伺服器不使用時會進入休眠"。
                  所以本專案在登入或註冊會員等與後端有關之功能可能無法使用，請見諒。
                </li>
              </ol>
            </li>
          </ul>

          <a
            href="https://github.com/james-chiou/mern_project_client"
            target="_blank"
            rel="noreferrer noopenner"
            className="btn btn-primary btn-lg me-2"
            type="button"
          >
            Github(前端)
          </a>
          <a
            href="https://github.com/james-chiou/mern_project_server"
            target="_blank"
            rel="noreferrer noopenner"
            className="btn btn-primary btn-lg "
            type="button"
          >
            Github(後端)
          </a>
        </div>
      </div>
    </main>
  );
};

export default Aboutcomponent;
