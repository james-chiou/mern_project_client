import React from "react";

const Aboutcomponent = () => {
  return (
    <main>
      <div class="ps-3 bg-light rounded-3">
        <div class="container-fluid py-3">
          <h1 class="display-6 fw-bold">Projrct 9 - 學習系統</h1>
          <ul class="list-unstyled">
            <li class="col-md-10 fs-5">
              本系統使用:
              <ol>
                <li class="col-md-10 fs-5 my-2">
                  React
                  作為前端框架，其負責顯示各頁面的內容，例如:登入後會在個人頁面看見個人資料、在課程頁面可以看到使用者所創建或註冊的課程。
                </li>
                <li class="col-md-10 fs-5">
                  Node.js、MongoDB作為後端服務器，則用來處理Route、API、資料傳遞、資料加密以及儲存資料的部分。
                </li>
              </ol>
            </li>
          </ul>
          <ul class="list-unstyled">
            <li class="col-md-10 fs-5">
              本系統在註冊會員時，除了帳號密碼之外還須填寫想註冊的身分為教師或是學生。
              <ol>
                <li class="col-md-10 fs-5 my-2">
                  教師:
                  您可以在創建課程頁面進行新課程的建立。而在課程頁面您可以看見已創建的課程，並可以進行編輯或刪除課程。
                </li>
                <li class="col-md-10 fs-5">
                  學生:
                  您可以在註冊課程頁面進行搜尋並註冊課程。註冊完後，在課程頁面可以看見已註冊的課程，您也可以在課程頁面進行取消註冊。
                </li>
              </ol>
            </li>
          </ul>

          <a
            href="https://github.com/james-chiou/mern_project_client"
            target="_blank"
            rel="noreferrer noopenner"
            class="btn btn-primary btn-lg me-2"
            type="button"
          >
            Github(前端)
          </a>
          <a
            href="https://github.com/james-chiou/mern_project_server"
            target="_blank"
            rel="noreferrer noopenner"
            class="btn btn-primary btn-lg "
            type="button"
          >
            Github(後端)
          </a>
        </div>
      </div>

      <div class="ps-3 pt-2 bg-light rounded-3">
        <div class="container-fluid py-3">
          <h1 class="fw-bold fs-2">聯絡方式</h1>
          <p class="col-md-8 fs-4 mb-0">作者: 邱泓叡</p>
          <p class="col-md-8 fs-4 my-0">信箱: hongjuichiou.james@gmail.com</p>
        </div>
      </div>
    </main>
  );
};

export default Aboutcomponent;
