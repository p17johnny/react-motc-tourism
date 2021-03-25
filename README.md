# react-tourism(2021)
## 作業架構設計

*   [概述](#overview)
*   [架構說明](#description)
    *   [文件樹](#tree)
    *   [安裝的package用途](#modules_usage)
    *   [程式解析](#how)
*   [啟動方式](#start)
*   [說明](#q)
*   [作業內容](#homework_detail)


<h3 id="overview">概述</h3>

以乾淨的介面呈現PTX全台旅遊景點，點擊每個景點都可以查看開放時間、景點地址、交通方式與活動網址，若該PTX資料並未提供則顯示'無資料'，景點地址提取資料中的lat,lon可讓使用者點下連結時導向至該景點經緯度。

地區分類分為北部、中部、南部、東部、離島地區，顯示該地區的活動資訊（名稱、圖片、詳細資訊）。

---

<h3 id="description">架構說明</h3>
<h4 id="tree">文件樹</h4>

```
.
├── gcloud                              // 推上GCP的資料夾
│   ├── app.yaml
│   └── build
└── main                                // 前端主要程式碼
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   ├── resources
    │   │   └── images
    │   │       ├── noImg.png           // 資料中沒有圖片時顯示
    │   │       └── renDesignLogo.png
    │   └── robots.txt
    ├── src
    │   ├── components
    │   │   ├── attraction              // 景點的component. allspot,city共用
    │   │   │   ├── index.js
    │   │   │   └── style.module.scss
    │   │   ├── details                 // 點擊景點時跳出的詳細資料框。allspot,city共用
    │   │   │   └── index.js
    │   │   ├── footer                  // 每一頁的頁尾
    │   │   │   └── index.js
    │   │   ├── menu                    // 每一頁的頁首
    │   │   │   ├── index.js
    │   │   │   └── style.module.scss
    │   │   └── mixins.scss
    │   ├── global.scss                 // 通用style
    │   ├── index.js
    │   ├── pages
    │   │   ├── allspot                 // 全部景點
    │   │   │   ├── index.js
    │   │   │   └── style.module.scss
    │   │   ├── city                    // 地區分類
    │   │   │   ├── index.js
    │   │   │   └── style.module.scss
    │   │   ├── home                    // 首頁
    │   │   │   ├── index.js
    │   │   │   └── style.module.scss
    │   │   ├── layout                  // 呈現樣板（router內的child都在這裡顯示）
    │   │   │   └── index.js
    │   │   └── mixins.scss
    │   ├── redux                       // redux(reducres只儲存詳細資料，請見＊說明＊)
    │   │   ├── ptx
    │   │   │   ├── actions.js
    │   │   │   └── reducers.js
    │   │   └── reducers.js
    │   ├── reportWebVitals.js
    │   ├── router.js                   // react-router-dom 路徑分配、切換頁面動畫
    │   ├── services
    │   │   └── ptxAuth.js              // 取得ptx資料時給予的header(官方範例程式)
    │   └── style.css
    └── yarn.lock
```

---

<h4 id="modules_usage">安裝的package用途</h4>

*   antd   
    *   UI介面包
*   axios
    *   post/get.... 傳輸、取得資訊
*   bootstrap
    *   佈景包
*   classnames
    *   加速前端界面開發
*   connected-react-router
    *   搭配react-router-dom
*   jssha
    *   PTX Headers加密需求
*   node-sass
    *   安裝來使用module.scss自定義
*   react-infinite-scroller
    *   偵測畫面滾動狀態，到底時呼叫function
*   react-transition-group
    *   切頁動畫
*   react-redux、redux、redux-thunk
    *    redux＋本人習慣一次安裝 儲存全域變數

<h4 id="modules_usage">程式內容</h4>

 -  由於從ptx取得的ScenicSpot物件平稱相同，利用`src/components/attraction`呈現景點的圖片、類別、名稱、詳細資訊讓allspot,city共用，增加程式碼重用性，
 -  設計`src/pages/layout` 加入 `components/footer` 與 `components/menu` 讓全部介面都擁有一樣的footer,menu，且不必每個地方都寫。若有不需要這兩樣的則增加router url前輟並利用它判斷要呈現的layout（於`src/rouer`）增加，並於 layout 中設計function讀取router或windows.location回傳想要顯示的layout形式。
 -  不直接使用Modal包資料而是選擇額外寫一份 `src/components/details` 是為了讓allspot與city點下景點後呈現的內容相同，也更容易一次改變兩種。
 
---


<h3 id="start">啟動方式</h3>

 -  於本機運行
    1.  進入程式碼資料夾 `cd main` 
    2.  安裝npm packages `npm i`
    3.  啟動伺服器 `npm start`
 -  錯誤解決
    1.  若發生node-sass錯誤 windows,mac格式不相容問題，請輸入 `npm rebuild node-sass --force` 即可，或重新安裝node-sass

---

<h3 id="q">說明</h3>

 - 程式中redux store的部分只在詳細資料使用的原因
    - 原先為了讓api呼叫次數減少，在全部景點頁面中打算儲存已經取得的所有資料以供使用者將頁面切換回來時重新顯示，故利用useStore儲存資料直到使用者按下F5刷新頁面清除store資料。但後來發現一次讀取全部已讀資料讓使用者讀取網頁時負擔增加，就改變為下列寫法。
    - 利用`store.getState().ptx.all.length<30`判斷是否已經有讀取過，有則`setData(store.getState().ptx.all)`並在顯示處利用`data.slice(0,count)`限制每次顯示筆數，每滾到底則`setCount(count+30)`直到`data.length === store.getState().ptx.all.length`呼叫api更新資料。
    - 最後發現這個行為將導致資料來源更新時，使用者不會取得新資料，並且使用者呼叫api取得新資料時可能出現同樣資料（若ptx更新資料時是從前面開始更新），故取消這項功能。

---

<h3 id="homework_detail">作業內容</h3>

[連結到作業內容(Markdown)](https://github.com/p17johnny/react-motc-tourism/blob/main/HWdetails.md)
