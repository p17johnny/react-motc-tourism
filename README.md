# Dcard-FrontendInternHW(2021)
 ## 題目描述
  - 串接交通部觀光景點 API (MOTC Transport API V2),並使用 React 實作一個瀏覽景點的網站
  - 完成作業後上傳到 Github,繳交連結即可

 ## 基本要求
 - 實作全部景點列表
   - route 必須要是 /scenicSpot
   - 串接 GET /v2/Tourism/ScenicSpot 回傳的資料
     - 第一次只能載入 30 個景點
     - 列表在滾到頁面底部時要再自動發送 API 請求 (stop 與 skip),載入額外 30 個景點,直到沒有更多景點

 - 列表內的項目至少需顯示:景點名稱 Name、景點特色精簡說明 Description
   - 實作縣市景點列表
   - route 必須要是 /scenicSpot/{City}
   - 串接 GET /v2/Tourism/ScenicSpot/{City} 回傳的資料
      - 第一次只能載入 30 個景點
      - 列表在滾到頁面底部時要再自動發送 API 請求 (stop 與 skip),載入額外 30 個景點,直到沒有更多景點
   - 例: /scenicSpot/LienchiangCounty 頁面就只會顯示連江縣的景點
 - 切換頁面按鈕
   - 要有能切換去全部景點列表與不同縣市景點列表的功能,UI 可以是任何形式,e.g. Header, NavBar, Drawer, Filter...
   - 所有頁面都要有這個功能
 - 請在文件內說明如何啟動


## 加分條件
 - 在文件內簡單說明作業架構的設計

## 評分重點
 - 正確性:必須符合基本要求、能正常運作
 - 效能:例如避免重複發送 API 請求、避免 component rerender
 - 程式碼架構與品質:例如易讀性、重用性
 - 樣式、排版、美觀度非評分項目

### Reference
 - https://ptx.transportdata.tw/MOTC?t=Tourism&v=2
 - https://drive.google.com/file/d/14wpY_xmY1VxlwJQNr1WKE872UdWZ6ft6/view