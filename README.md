# 線上學習網站 (前端)  
1. 本專案為前、後端分離，此為前端的部分
2. 前端以React.js為框架
3. React Components包含  
   1. 主頁面
   2. 註冊會員/登入會員
   3. 課程頁面/新增課程頁面/編輯課程頁面
   4. 註冊課程頁面
4. React Service包含  
   1. 會員資料相關(auth.service.js):
      * 登入/登出/註冊會員  
   2. 課程相關(course.service.js):    
      1. 會員身份為教師  
         * 新增課程/編輯課程內容/刪除課程  
      2. 會員身份為學生  
         * 註冊課程/取消註冊課程  
5. 本專案使用[Render](https://render.com/)網站進行部署，前往[線上學習網站](https://mern-project-client-49t7.onrender.com)  
## 因Render網站的決策，本專案的Server不使用時會進入睡眠，所以在進行註冊/登入時會需要等待30秒以上。
