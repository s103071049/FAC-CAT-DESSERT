# FAT-CAT-DESSERT

網站連結：[肥貓甜點](https://s103071049.github.io/FAC-CAT-DESSERT/#/)

![20211104_210933](https://user-images.githubusercontent.com/47899484/140320798-43d03a71-4cfd-4662-a065-09b640d8a325.gif)


## 專案簡介
### **為疫情不開放內用，提供之外帶、外送服務之訂餐平台。本平台提供客戶線上訂餐之優惠。**
```
想吃甜點，但不知道有那裡好吃 ?
店租好貴、配合疫情來店人數又要進行控管 ? 

WE present to you 肥貓甜點，為疫情提供之外帶、外送訂餐平台

從蛋糕、餅乾、巧克力到飲料，提供搜尋檢視、主廚推薦、及熱門商品，讓你在家也能簡單購

不論你是甜點控還是嘗鮮客，輕鬆註冊就能立即下訂
商家後台可新增、編輯、刪除商品，還能立即更改運費規則
最重要的是，透過訂單系統就能立即決定接單或拒單

多一道通路、多一分保障

我們採用以下技術開發，前端採用 react、後端採用 express 資料庫採用 postgresSQL

開發耗時一個半月，從構思發想到設計圖實作，歷經開會討論、DEBUG

今晚來點甚麼 ? 就來點肥貓甜點
```
### 功能
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

訪客帳密：visitor@gmail.com；s12345
使用者帳密：
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
### 一、前台功能 demo
#### 商品搜尋
可依照最新商品、手動搜尋、分類搜尋方式搜尋商品
![20211104_220813](https://user-images.githubusercontent.com/47899484/140333971-8f57c355-a6ec-4e57-b955-b08429ec324b.gif)
#### 會員功能
註冊、登入、更改個人資訊及密碼
![20211104_225609](https://user-images.githubusercontent.com/47899484/140337779-3016b59d-2d07-474a-aecd-f4202dd77bc0.gif)
![20211104_225923](https://user-images.githubusercontent.com/47899484/140338015-ad666474-3f6a-472c-b395-3dcfc53feeb8.gif)
#### 購買商品
可以將商品加入購物車，查看欲購買的商品內容及金額，並成立訂單。可以從會員專區的訂單瀏覽訂單狀態，還有訂單明細
![20211104_235358 (2)](https://user-images.githubusercontent.com/47899484/140373909-1997dda2-a513-4daa-97e4-61ab2a516696.gif)
### 二、後台功能 demo
#### 商品管理
管理者可以新增、刪除、更改商品資訊，或重上架已停售之商品
![20211104_232414](https://user-images.githubusercontent.com/47899484/140354243-3a8ed309-e8cb-4d5a-83c9-c4b98b0f9135.gif)
#### 訂單管理
管理者可以決定是否接受消費者送出之訂單，並透過 filter 功能瀏覽訂單狀態
![20211104_234218](https://user-images.githubusercontent.com/47899484/140365415-22978f7f-8159-42b2-b568-0bdd5b344ea0.gif)
#### 運費管理
管理者可以新增、刪除、更改運費規則，或復原已刪除之運費規則
![20211104_233907](https://user-images.githubusercontent.com/47899484/140363188-98ac31a4-d024-4926-9052-00e6275ffdd7.gif)
## 專案後端
肥貓甜點訂購甜點平台後端，採用 Express 和 Sequelize 進行
* 專案連結 [finalProjectBackend](https://github.com/halloju/finalProjectBackend)
## 團隊分工
共同完成：userStory、wireframe、設計稿、切版、資料庫規劃、重構、規格文件撰寫
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
