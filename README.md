# To-do List x Sequelize

改變 To-do List 搭配 MySQL 資料庫，實作出具有CRUD功能。

## Features - 產品功能

- 使用者可以新增一筆待辦事項
- 使用者可以瀏覽全部待辦事項 
- 使用者可以修改一筆待辦事項
- 使用者可以刪除一筆待辦事項  
- 使用者可以查看特定待辦事項
- 使用者可以註冊帳號及登入

## Environment SetUp - 環境建置

1. [Node.js](https://nodejs.org/en/) (版本使用 10.15.0) - JavaScript 執行環境
2. [npm](https://nodejs.org/en/) (版本使用 6.4.1) - Node.js 的套件管理器
3. [Express](https://www.npmjs.com/package/express) (版本使用 4.17.1) - 應用程式架構
4. [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) (版本使用 5.2.0) - 模板引擎
5. [Nodemon](https://www.npmjs.com/package/nodemon) (版本使用 2.0.6) - 伺服器輔助
6. [Body-Parser](https://www.npmjs.com/package/body-parser) (版本使用 1.19.0) - Node.js body parsing middleware
7. [MySQL](https://dev.mysql.com/downloads/windows/installer/) (版本使用 8.0.23) - 資料庫
8. [sequelize-cli](https://www.npmjs.com/package/mongoose) (版本使用 6.2.0) - Sequelize 提供了一系列事先設定好的任務腳本，包括自動產生設定檔、載入種子資料、資料庫設定等功能
9. [Method-Override](https://www.npmjs.com/package/method-override) (版本使用 3.0.0) - Express 的 middleware「中介軟體」
10. [Express-Session](https://www.npmjs.com/package/express-session) (版本使用 1.17.1) - Express的「儲存認證結果」
11. [Passport](https://www.npmjs.com/package/passport) (版本使用 0.4.1) - Passport.js 是專門用於「使用者認證」
12. [Passport-Facebook](https://www.npmjs.com/package/passport-facebook) (版本使用 3.0.0) - 運用 Passport 的 Facebook Strategy 進行第三方登入。
13. [Connect-Flash](https://www.npmjs.com/package/connect-flash) (版本使用 0.1.1) - 提示訊息
14. [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) (版本使用 2.4.3) -  Bcrypt.js 是專門用於「雜湊使用者的註冊密碼」
15. [dotenv](https://www.npmjs.com/package/dotenv) (版本使用 8.2.0) -  隱藏重要資訊

## Use Tools - 使用工具

- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
- [Express](https://www.npmjs.com/package/express) - 應用程式架構
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - 模板引擎
- [MySQL](https://dev.mysql.com/) - 資料庫
- [MySQL Workbench](https://www.mysql.com/products/workbench/) - MySQL的GUI 操作軟體

## Installing - 專案安裝流程

1. 開啟終端機(Terminal) 或 (Git Bash) 到欲存放專案的本機位置並執行:

```
git clone https://github.com/Allen-TaiLin/To-do-List-x-Sequelize.git
```

2. 開啟終端機(Terminal) 或 (Git Bash)，進入到存放此專案的資料夾

```
cd restaurant_list_refactor
```

3. 安裝 npm 套件

```
在 Git Bash 或 (Terminal) 輸入 npm install
```

4. 安裝 nodemon 套件

```
在 Git Bash 或 (Terminal) 輸入 npm install -g nodemon
```

5. 匯入種子資料到資料庫

```
在 Git Bash 或 (Terminal) 輸入 npx sequelize db:seed:all
```

6. 啟動伺服器，執行 app.js 檔案

```
npm run dev
```

7. 當終端顯示出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
App is running on http://localhost:3000
```



