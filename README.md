# FAT-CAT-DESSERT

網站連結：[肥貓甜點](https://s103071049.github.io/FAC-CAT-DESSERT/#/)

![React App_page-0001](https://user-images.githubusercontent.com/47899484/140013172-80b7b06c-36e6-4b4b-b6c5-d2b4cf2b5997.jpg)

## 專案簡介
**為疫情不開放內用，提供之外帶、外送服務之訂餐平台。本平台提供客戶線上訂餐之優惠。**
### 功能
clone [法米](http://www.lafamille.com.tw/)部分功能的線上訂購甜點平台
* 前台功能
  * 使用者可使用功能：
    * 商品系統：自動篩選、手動搜尋、分類搜尋，不但能瀏覽網站上所刊登的商品，且能決定搜尋結果的排序方式
    * 購物車系統：查看欲購買的項目及內容，並且成立訂單
    * 個人資料管理系統：註冊、編輯會員相關資訊
    * 訂單系統：隨時掌握訂單的最新狀態
* 後台功能
  * 店家可使用功能：
    * 商品管理系統：新增、修改、刪除、搜尋商品資訊
    * 訂單管理系統：決定訂單狀態與檢視訂單
    * 促銷管理：新增、修改、刪除、搜尋運費資訊

## 如何執行
`npm install` 
安裝此專案所需的第三方套件

`npm run start`
在 http://localhost:3000 上啟動此專案

`npm run build`
在 `build` 資料夾中建立此專案的 production 版本

`npm run deploy`
在 GitHub Page 上部屬此專案網站

## 使用技術
* React Hooks
* 套件：
  * React Router
* 第三方套件：
  * imgur api
## 功能結構
![image](https://user-images.githubusercontent.com/47899484/140026846-6a130ef1-615a-4355-93aa-6e81fa910527.png)



## 目錄結構說明
// 幻幻的這區
## 專案 DEMO
// 洋洋這區是給你的
## 專案後端
肥貓甜點訂購甜點平台後端，採用 Express 和 Sequelize 進行
* 專案連結 // 維尼記得補
## 團隊分工
* s103071049 (萱)
  * 前端
    *   購物車系統串接、訂單成立串接、推薦商品串接
    *   漢堡包實作
  * 後端
    *   購物車 api 實作
* backas36 (洋洋)
  * 前端
    *   商品管理系統串接、多項商品功能串接、訂單查詢串接
    *   navbar 實作
    *   分頁功能
  * 後端
    *   會員系統 api 實作
* halloju Wan-Chu Lin (維尼)
  * 前端
    *   促銷管理系統串接
    *   首頁熱銷商品、主廚推薦串接
  * 後端
    *   deploy
    *   商品、訂單、交易資訊、運費規則功能之 api 實作
* k1325699 (幻幻)
  * 前端
    *   會員系統串接
    *   商品搜尋串接、單項商品串接、熱銷商品、推薦商品頁面串接
    *   loading 功能
