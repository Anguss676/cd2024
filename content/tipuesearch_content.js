var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:\xa0 https://anguss676.github.io/cd2024/ \n 網誌:\xa0 https://anguss676.github.io/cd2024/blog \n 簡報:\xa0 https://anguss676.github.io/cd2024/reveal \n 倉儲:\xa0 https://github.com/Anguss676/cd2024 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n', 'tags': '', 'url': 'Brython.html'}, {'title': '每周進度', 'text': '', 'tags': '', 'url': '每周進度.html'}, {'title': 'w1', 'text': '建立個人課程 cd2024 倉儲與網站的操作影片 \n 設定 Replit 與 Github 應用授權的說明影片 \n 說明如何設定 Github 雙重認證 \n 說明如何利用 Replit 對 cd2024 改版 \n 如何設定個人倉儲中的 Pelican 網誌 \n 簡介 Odoo PLM 用法', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '甲班第一組組長如何建立 midag1 Team \n 利用 Replit 管理從 Classroom 取得的分組倉儲 \n 如何利用 Github Codespaces 維護網站內容 \n 如何利用近端可攜系統維護分組網站', 'tags': '', 'url': 'w2.html'}, {'title': 'cd2024_2b_7_w2 利用 codespaces 維護分組網站', 'text': '\n 0:00:04.864,0:00:07.424 好接下來啊我要用 \n 0:00:09.472,0:00:12.288 用這第一組的 \n 0:00:15.360,0:00:18.688 對應的這個來做示範OK \n 0:00:19.456,0:00:21.248 因為他們已經把 \n 0:00:23.808,0:00:27.392 分組的這一個倉儲內容已經建好了 \n 0:00:29.184,0:00:31.744 可是我現在想要用 \n 0:00:32.768,0:00:34.816 Codespaces來維護他 \n 0:00:37.376,0:00:39.168 所以你要仔細看喔 \n 0:00:39.680,0:00:42.240 現在每一個倉儲啊 \n 0:00:43.008,0:00:45.056 他其實都有code \n 0:00:46.592,0:00:52.736 OK那你想要去看老師的畫面你各組你趕快弄成這樣之後就可以改版了 \n 0:00:56.320,0:01:00.928 然後你就可以直接點這個code他就會跑其實他就跑這個啦 \n 0:01:01.440,0:01:02.720 然後你再點這個 \n 0:01:04.512,0:01:10.656 你就會發現這個code任何一個倉儲裡面其實都已經有配置這個codespaces這個就 \n 0:01:10.912,0:01:11.680 是一個 \n 0:01:12.192,0:01:15.776 線上的一個整合環境其實跟一樣 \n 0:01:16.288,0:01:20.128 只是他的的界面啊是用v studio code \n 0:01:20.896,0:01:23.968 所以你點他的話他這邊就會出現了你可以 \n 0:01:25.248,0:01:28.320 在這個倉儲底下你可以建一個 \n 0:01:29.600,0:01:31.136 透過主分支 \n 0:01:31.648,0:01:35.488 來見一個Codespaces \n 0:01:36.512,0:01:38.048 目前我是用 \n 0:01:38.560,0:01:41.120 第一組組長的帳號做 \n 0:01:42.912,0:01:47.264 Ok所以他就進入這個就是v studio code的畫面 \n 0:01:49.568,0:01:54.432 那首先當然我要先啟動想辦法先啟動他的動態 \n 0:01:54.688,0:01:56.224 編輯網站對不對 \n 0:01:57.504,0:02:00.576 好那我們先看一下他這邊的配置 \n 0:02:01.344,0:02:03.392 他這個是他的主要的 \n 0:02:04.672,0:02:05.696 功能表 \n 0:02:06.720,0:02:09.024 我們比較常用的是這個終端機 \n 0:02:09.536,0:02:13.120 因為我們啟動動態之後 \n 0:02:13.632,0:02:18.496 我必須要在新增一個終端機這個就是我的我們的shell \n 0:02:20.032,0:02:24.128 Terminal的意思就是輸入指令用 \n 0:02:24.384,0:02:28.480 但因為我們一方沒有啟動動態他沒有啟動靜態 \n 0:02:28.736,0:02:30.528 好所以我就必須要再 \n 0:02:30.784,0:02:31.552 這個 \n 0:02:32.320,0:02:36.928 拉出終端機我新增一個最表示現在我有兩個命令區 \n 0:02:37.440,0:02:40.000 因為他是boom share \n 0:02:40.256,0:02:46.400 好像urn吧S.S.H輸入指令的地方 \n 0:02:48.192,0:02:50.496 還記得我們在 \n 0:02:52.544,0:02:57.664 Replit裡面啊我們啟動的時候他這個run其實是執行什麼 \n 0:02:58.176,0:02:59.712 我們可以在 \n 0:03:00.736,0:03:06.624 對應的設定檔所以我們在之前講你知道的話我把hidden file要打開來 \n 0:03:07.392,0:03:09.696 我們run啊其實他就是啟動 \n 0:03:11.488,0:03:14.048 Python3去執行他的main \n 0:03:15.328,0:03:17.376 他就是run就是這個 \n 0:03:19.168,0:03:20.704 就是利用python3 \n 0:03:20.960,0:03:23.776 第三版的python去執行main.py \n 0:03:24.032,0:03:25.568 好那我們試試看 \n 0:03:26.080,0:03:27.104 同樣的在 \n 0:03:28.896,0:03:34.784 Codespaces我們就這樣做看看 \n 0:03:35.040,0:03:39.904 ptyhon環境啊我們執行看就知道了你就打python3 \n 0:03:40.672,0:03:41.696 main.py \n 0:03:42.976,0:03:45.024 他就馬上告訴你說不行喔 \n 0:03:45.792,0:03:48.864 因為連flask都沒有模組沒有啊 \n 0:03:49.376,0:03:52.960 模組沒有還記得我們在Replit是怎麼做的嗎 \n 0:03:53.472,0:03:56.032 我們是chmod u+x \n 0:03:57.824,0:04:00.640 然後是針對什麼init \n 0:04:01.408,0:04:02.176 replit \n 0:04:03.200,0:04:05.504 這個程式可以執行 \n 0:04:06.016,0:04:10.112 緊接著就請他幫我安裝對應的模組對吧 \n 0:04:13.952,0:04:17.024 那你就會發現說他速度好像比replit快 \n 0:04:17.791,0:04:19.839 他給的資源相對是多的 \n 0:04:20.863,0:04:22.911 我那應該是快蠻多啦 \n 0:04:24.191,0:04:29.567 因為他給你免費啊目前的核心啦你只要進來 \n 0:04:31.103,0:04:32.895 他對應的這個 \n 0:04:33.407,0:04:36.735 你這裡想要看到底他現在配置給我們什麼 \n 0:04:36.991,0:04:39.551 你都可以codespaces \n 0:04:40.319,0:04:44.415 那你就可以看到其實你剛剛已經啟動了一個codespaces \n 0:04:45.183,0:04:45.951 OK \n 0:04:46.463,0:04:52.607 然後他的給定了是兩個core啊8GB剛剛你講的注意的話replit給你兩GB \n 0:04:54.143,0:04:56.191 因為他先給你8gb兩個core \n 0:04:56.447,0:05:00.031 然後一個月啊他免費的是一天啊 \n 0:05:00.543,0:05:03.359 假如two core用他hour \n 0:05:04.127,0:05:05.407 小時的話 \n 0:05:06.431,0:05:09.247 他一個月免費是120個cors hours \n 0:05:10.015,0:05:14.367 睡覺我們今天用了一個小時就用掉兩個扣 \n 0:05:15.135,0:05:19.487 這樣你基本上就剩下118個core hours \n 0:05:19.743,0:05:21.279 用完就沒了 \n 0:05:21.791,0:05:24.863 所以很顯然我們要善用這裡面的core hours \n 0:05:25.631,0:05:29.727 編輯的時候可以不要在上面就不要在上面就轉檔 \n 0:05:29.983,0:05:32.287 特定啟動的時候在上面 \n 0:05:32.799,0:05:38.687 這個時候你就你就知道要怎麼想好所以我這樣才安裝的我其實已經可以了所以我用 \n 0:05:39.711,0:05:43.295 上網上的箭頭把剛剛的這個拿去拿出來 \n 0:05:43.551,0:05:46.367 這個時候再執行啊你就會發現說 \n 0:05:46.879,0:05:48.671 他就幫我啟動一個阜號 \n 0:05:50.463,0:05:54.303 現在這裡就跳出來說他已經啟動一個阜號 \n 0:05:54.815,0:05:57.887 那這個是動態所以我就把動態打開來 \n 0:05:59.167,0:06:01.727 這個接下來就跟local host \n 0:06:02.239,0:06:08.383 以及我在對應的Replit是一樣的所以是小寫Admin進來 \n 0:06:08.639,0:06:11.455 為什麼不需要像replit上學期的這一個 \n 0:06:12.223,0:06:12.991 Secret \n 0:06:15.039,0:06:19.647 因為誰知道我的網址是什麼他每一次中間這個都不一樣 \n 0:06:20.671,0:06:22.719 所以舊友就保全的功能 \n 0:06:22.975,0:06:27.583 老師我進來這邊我只要會更新會轉檔就ok了 \n 0:06:28.863,0:06:32.191 問題是 \n 0:06:33.471,0:06:35.263 那我的靜態要怎麼看 \n 0:06:35.519,0:06:36.287 好的靜態 \n 0:06:36.799,0:06:40.895 因為我有兩個吧這個已經執行開始了我在我還有一個啊 \n 0:06:41.407,0:06:47.551 在這裡是新的喔我們就要python3我要執行他的模組 \n 0:06:47.807,0:06:51.135 而且是啟動http.server \n 0:06:52.159,0:06:55.231 這個的意思就是因為我們這個系統啊 \n 0:06:55.999,0:06:58.559 這個系統帶有動態跟靜態 \n 0:06:59.327,0:07:01.887 靜態我們還有一個index \n 0:07:02.911,0:07:09.055 我們的根目錄有index可以啟動那你想要看他裡面就有這個index我把他帶到 \n 0:07:09.311,0:07:11.871 編輯器index怎麼講的 \n 0:07:13.407,0:07:15.455 index就說你幫我 \n 0:07:15.711,0:07:21.599 毫不猶豫了這個是沒有任何Delay了0秒他會跳到哪裡 \n 0:07:22.111,0:07:24.415 他會跳進content index \n 0:07:25.183,0:07:26.719 Content是靜態對不對 \n 0:07:27.231,0:07:30.559 這很顯然我只要利用這個指令 \n 0:07:31.071,0:07:33.887 啟動靜態我就可以看到了 \n 0:07:34.655,0:07:35.935 意思是 \n 0:07:36.191,0:07:37.983 就跟我在近端一樣 \n 0:07:39.007,0:07:40.543 唉他又開了一阜號 \n 0:07:40.799,0:07:42.335 就在打開 \n 0:07:42.847,0:07:45.407 我就可以同時有動態跟靜態 \n 0:07:47.455,0:07:48.991 那好處是什麼 \n 0:07:49.247,0:07:52.319 好處是我改版之後轉檔馬上可以看到 \n 0:07:53.599,0:07:58.975 比方說我想要在about跟cmsimd這裡我要加一個onshape \n 0:08:00.255,0:08:01.791 我到時候指定給 \n 0:08:02.047,0:08:04.351 某一個組員話零件的部分 \n 0:08:04.607,0:08:07.679 我要請他把它相關的連結放到這裡來 \n 0:08:08.191,0:08:10.239 而且是第一階的我就把它save起來 \n 0:08:11.263,0:08:13.823 只要我按一下轉靜態 \n 0:08:14.335,0:08:16.127 我馬上在這裡可以看到 \n 0:08:16.383,0:08:17.919 原來這裡沒有在沒有 \n 0:08:18.175,0:08:18.943 我現在 \n 0:08:19.967,0:08:23.551 而且這個是還沒有推到給他配置 \n 0:08:24.319,0:08:25.599 很方便啊 \n 0:08:25.855,0:08:27.391 同樣的假如你會 \n 0:08:27.903,0:08:28.927 寫網誌 \n 0:08:29.695,0:08:31.743 好那我們現在的網誌在這裡 \n 0:08:32.767,0:08:34.559 其實你有部分的 \n 0:08:34.815,0:08:36.351 設定程式 \n 0:08:37.119,0:08:40.191 或者是我們要求你每個禮拜都寫的話 \n 0:08:41.471,0:08:46.079 那你有一些運算設計的運算也好或者是你在裡面想要 \n 0:08:46.335,0:08:48.127 呈現什麼樣的動態內容 \n 0:08:48.639,0:08:51.199 你就可以直接寫在網誌 \n 0:08:51.711,0:08:55.039 而且一轉檔馬上就會出現在這邊了 \n 0:08:55.807,0:09:00.415 為什麼因為現在動態靜態兩個同時在而且他的 \n 0:09:00.927,0:09:05.023 前面的這個部分是一樣差別在阜號 \n 0:09:05.791,0:09:09.375 有沒有這個是8080但它阜號並不是放在後面喔 \n 0:09:09.631,0:09:12.703 全部都用443幫你轉所以不錯啊 \n 0:09:13.215,0:09:17.055 對我來講非常方便所以我們就這樣的一個情況下 \n 0:09:17.311,0:09:18.847 你怎麼覺得兩個不夠 \n 0:09:19.103,0:09:22.687 給我們他又沒有限制我幾個終端機 \n 0:09:22.943,0:09:26.271 他只限制我們使用的core hours對不對 \n 0:09:27.295,0:09:29.855 我們想要編網誌 \n 0:09:30.111,0:09:31.647 我們一般是不會在這裡 \n 0:09:32.671,0:09:36.767 不會不會在這裡動那意思就好那我想要推上去了 \n 0:09:37.279,0:09:40.095 推上去我要用手動啦 \n 0:09:41.631,0:09:42.655 git add git commit \n 0:09:44.191,0:09:47.519 阿這裡因為沒有git的那個()沒有啦 \n 0:09:47.775,0:09:49.055 全部都是指令 \n 0:09:49.311,0:09:50.847 所說的Add onshape \n 0:09:51.615,0:09:52.639 我要開始畫 \n 0:09:53.663,0:09:59.807 期中的那個平台對不對我趕快去就上去了要上去之後他就會 \n 0:10:00.063,0:10:01.343 出現在這裡啊 \n 0:10:02.111,0:10:04.159 他就出現在這裡啊要轉檔 \n 0:10:04.927,0:10:09.023 所以這個很方便那因為假如你要退出來他有兩個地方退 \n 0:10:09.535,0:10:12.095 一個是從這裡因為現在目前是active \n 0:10:13.119,0:10:15.167 那這裡我是怎麼過來的 \n 0:10:15.423,0:10:18.239 你只要有啟動登入 \n 0:10:19.007,0:10:21.567 到github你只要打給他打github.com \n 0:10:21.823,0:10:23.871 斜線codespaces \n 0:10:24.383,0:10:28.991 他就進來了那目前我是啟動一個codespaces所以你在這裡你可以關 \n 0:10:29.247,0:10:30.527 你在這裡你可以stop \n 0:10:30.783,0:10:33.087 他就不在計算你的cors hours \n 0:10:33.343,0:10:37.439 你也可以直接在剛才的這裡面 \n 0:10:38.463,0:10:41.535 在這裡要怎麼關不是在那裡關在這裡關 \n 0:10:42.559,0:10:43.839 從這裡也可以關 \n 0:10:45.119,0:10:51.263 這個跟他那個是一樣只是這個是在倉儲下面剛才那個是在Codespaces的畫面下 \n 0:10:51.519,0:10:56.639 我現在把它關掉我就跑到我的倉儲跑到這裡我就跟他講我要關我要知道 \n 0:10:56.895,0:10:58.943 那這樣他就不會記錄那個core hours \n 0:10:59.199,0:11:01.247 我一個月只有 \n 0:11:01.503,0:11:04.319 120個那這個月 \n 0:11:05.599,0:11:08.415 最後一天了所以你就盡量用啦 \n 0:11:08.671,0:11:11.743 我不曉得他怎麼算了啊我們29號了嗎 \n 0:11:11.999,0:11:14.815 所以你現在120個反正那你可以開通宵拉 \n 0:11:15.327,0:11:17.375 對吧三月份重新計算 \n 0:11:17.887,0:11:23.007 所以這裡等於有一點吃到飽的概念喔你最後一天我不知道他是不是這樣算 \n 0:11:23.263,0:11:26.847 轉檔完其實我們的 \n 0:11:28.127,0:11:29.919 這一個所謂的 \n 0:11:30.175,0:11:32.479 我們從這裡面要怎麼看他的靜態 \n 0:11:32.991,0:11:39.135 你想要懶得去聽的話你就跑了pages這裡來然後你就點這個規律我們也知道了 \n 0:11:39.391,0:11:41.695 所以onshape應該有在上面 \n 0:11:43.487,0:11:46.303 他說這個影片我們就把它丟到 \n 0:11:46.815,0:11:52.959 線上然後你剩下的時間啊你就趕快一方面我加入二方面 \n 0:11:53.215,0:11:54.495 我就開始每一個人直接進入到倉儲 \n', 'tags': '', 'url': 'cd2024_2b_7_w2 利用 codespaces 維護分組網站.html'}, {'title': 'cd2024_2b_5_w2 第一組組長建立 Team 並設定分組倉儲', 'text': '\n 0:00:02.304,0:00:03.840 我們就從這裡開始 \n 0:00:04.608,0:00:08.704 意思是說我們現在已經取到對應的這一個 \n 0:00:09.216,0:00:13.312 加入2B這一個群組作業的權限 \n 0:00:13.824,0:00:17.408 他第一點就是說組長必須要先登入到他的github \n 0:00:17.664,0:00:18.688 這是第一組的組長 \n 0:00:19.200,0:00:22.784 Ok所以我們就可以把那個連結把它貼上來 \n 0:00:24.320,0:00:29.952 按下去之後啊裡面理論上應該只有一個team就是測試的這個team \n 0:00:30.464,0:00:34.048 那這個team的意思就告訴你啊因為我是第99組 \n 0:00:35.072,0:00:41.216 這個可能要在操場上課才有99組就說我們現在是midbg99我要 \n 0:00:41.472,0:00:43.008 建team的部分我要建 \n 0:00:43.264,0:00:44.288 bg1 \n 0:00:44.800,0:00:46.848 然後你屬於第一組的你就join \n 0:00:48.640,0:00:53.760 好所以我現在要建create一個team而且這個名稱一定要對你就看得上面mid \n 0:00:54.272,0:00:56.576 然後我是b班我是group1 \n 0:00:57.600,0:00:59.904 這個就是按照我們的規劃 \n 0:01:00.160,0:01:04.768 這樣的話我就可以看到這個是midterm期中報告的B班 \n 0:01:05.024,0:01:06.304 然後是group1 \n 0:01:06.560,0:01:08.864 所以我就可以直接create這個team \n 0:01:10.656,0:01:15.008 好所以我Accept這樣的assignment \n 0:01:15.264,0:01:19.616 其實我就已經拿到分組倉儲了所以其他的人啊 \n 0:01:19.872,0:01:22.688 假如取得是待會我們會 \n 0:01:23.200,0:01:26.272 在團隊那邊給你那一個我們2B的 \n 0:01:27.040,0:01:27.808 這個連結 \n 0:01:28.320,0:01:30.112 這我已經取到這個 \n 0:01:30.624,0:01:31.648 第一組的 \n 0:01:31.904,0:01:32.672 期中分組報告 \n 0:01:35.744,0:01:37.280 糟糕糟糕 \n 0:01:37.792,0:01:40.096 我竟然沒有設定 \n 0:01:40.608,0:01:42.400 竟然沒有設定template \n 0:01:45.472,0:01:48.800 所以我這個可能那這樣對嗎 \n 0:01:50.592,0:01:53.408 我這個是難度增加因為現在是空的 \n 0:01:54.944,0:01:58.528 我在設定的時候忘記這個也可以啦 \n 0:01:59.296,0:02:03.904 這個也可以只是你的難度會增加就變成說你先要 \n 0:02:04.160,0:02:05.184 啟動這一個 \n 0:02:05.696,0:02:11.840 那我們我們來幫他做好了那其他的人應該也是一樣喔這樣我設定不 \n 0:02:12.096,0:02:13.888 我設定是直接拉template \n 0:02:14.400,0:02:17.728 結果那個template \n 0:02:18.240,0:02:21.568 可是現在這樣子template還能改嗎我看一下 \n 0:02:22.336,0:02:25.408 我進來看一下因為我這邊還有我的權限 \n 0:02:25.664,0:02:27.712 我看有沒有辦法 \n 0:02:27.968,0:02:30.784 我進來看看 \n 0:02:31.296,0:02:34.112 是我假如近這個2b呀 \n 0:02:34.624,0:02:36.160 進這個2B \n 0:02:37.696,0:02:40.256 然後我來編輯看看 \n 0:02:42.048,0:02:45.376 然後8個設定8個public \n 0:02:46.912,0:02:49.472 ㄟ有耶奇怪咧 \n 0:02:49.728,0:02:54.336 ()我有阿為什麼他沒有反應 \n 0:02:55.872,0:02:58.944 好所以沒有關係這樣的話我們 \n 0:02:59.200,0:03:01.504 我們必須要從這裡來 \n 0:03:02.016,0:03:04.832 Ok我們必須要等於是你要從頭做起來 \n 0:03:05.088,0:03:07.904 所以你必須要在近端才能處理這個 \n 0:03:08.416,0:03:11.744 就變成你一定要有可攜的環境 \n 0:03:12.256,0:03:14.304 好所以我們把它跑到 \n 0:03:14.816,0:03:18.144 好啦那既然是這樣因為我有設耶 \n 0:03:18.400,0:03:20.448 但他並沒有所以我現在先切換 \n 0:03:21.472,0:03:23.008 切換到c槽 \n 0:03:23.520,0:03:29.152 所以我打c冒號是切換到c槽那我想要有一個 \n 0:03:29.408,0:03:30.432 目錄然後我用tmp來做 \n 0:03:33.504,0:03:36.832 所以他基本上就是要我來echo \n 0:03:37.600,0:03:39.648 所以我們只能夠照這個來做 \n 0:03:40.416,0:03:43.744 意思就說我現在變成是我的分組網站啊 \n 0:03:44.000,0:03:49.120 他給我的是一個全空的那我曉得為什麼因為我在設的時候剛剛已經看到了 \n 0:03:49.376,0:03:51.936 我其實是有有設template \n 0:03:52.192,0:03:52.960 有沒有 \n 0:03:53.728,0:03:55.520 我有設template \n 0:03:56.288,0:03:58.848 為什麼他並沒有 \n 0:03:59.104,0:04:05.248 沒有按照我設定的來取不過應該ok所以這裡面啊我就可以 \n 0:04:05.504,0:04:07.296 在這個指令區啊 \n 0:04:07.552,0:04:11.392 我先把他的這個倉儲先動起因為現在是完全空的 \n 0:04:11.904,0:04:14.720 所以他是叫我說要echo這一 \n 0:04:15.232,0:04:17.280 echo這個的意思就是我把 \n 0:04:17.536,0:04:19.327 我把這一個字串 \n 0:04:20.351,0:04:26.495 直接印出來之後他兩個大於啊就是塞進去放進去這個 \n 0:04:26.751,0:04:32.895 readme.md換句話說就是打開空的readme.md然後把這一行放進去而 \n 0:04:33.663,0:04:35.711 好所以我就把它ctrl+c下來 \n 0:04:35.967,0:04:38.783 然後就用滑鼠右鍵貼我就可以建立 \n 0:04:39.295,0:04:43.647 現在你假如打dir的話你就可以看到我已經有 \n 0:04:43.903,0:04:44.671 這個檔案 \n 0:04:45.695,0:04:51.839 所以我是切換到c比較快嗎因為我y的話是USB 3.0 c是() \n 0:04:52.095,0:04:58.239 當然是在c做會比較快那我建立一個tmp目錄我進到tmp目錄 \n 0:04:58.495,0:05:02.079 我echo這個字串把它塞到到這個檔案所以我現在已經有了這個檔案就這樣 \n 0:05:02.335,0:05:03.871 好然後我要 \n 0:05:04.639,0:05:05.919 讓這一個 \n 0:05:06.175,0:05:10.783 目前所在的tmp最其實我這樣做是錯了因為 \n 0:05:11.039,0:05:16.415 我目前在template目前是在tmp其實我應該要在 \n 0:05:16.671,0:05:20.255 mkdir哪一個我剛才應該是 \n 0:05:20.511,0:05:23.327 我的倉儲名的其實這個是ok的啦 \n 0:05:23.583,0:05:25.119 我應該是2B \n 0:05:25.887,0:05:27.935 然後Dash是MID \n 0:05:29.471,0:05:32.799 midterm的這個b班然後是group1 \n 0:05:34.847,0:05:39.711 我應該要進來為什麼因為我希望tmp底下 \n 0:05:39.967,0:05:43.807 有好幾個倉儲所以我就可以進到2B的midterm \n 0:05:46.111,0:05:48.415 然後是B的group1 \n 0:05:49.183,0:05:53.023 這個時候我應該是init才對 \n 0:05:53.279,0:05:59.423 為什麼你仔細看喔因為我目前腳進到西的tmp來看的話 \n 0:05:59.679,0:06:01.215 我當然是可以在這裡做啦 \n 0:06:01.727,0:06:05.823 可是我init之後啊他會建立一個點git \n 0:06:06.335,0:06:08.639 意思就說他會把這個目錄 \n 0:06:08.895,0:06:14.015 會把假如不是進來這裡做我在這裡做的話他會把這個目錄變成倉儲 \n 0:06:14.783,0:06:17.599 雖然外面目錄名稱不重要 \n 0:06:17.855,0:06:23.999 重要的反而是.git的裡面的c o n f i g所以我應該把這個 \n 0:06:25.535,0:06:27.583 然後應該目前是長這樣 \n 0:06:27.839,0:06:29.887 可是因為我已經有吧 \n 0:06:30.399,0:06:31.935 隱藏檔秀出來 \n 0:06:32.191,0:06:33.215 所以你仔細看 \n 0:06:33.471,0:06:39.615 我假如繼續執行initials這個git他就會建立所以我假如 \n 0:06:39.871,0:06:40.895 init的話 \n 0:06:41.407,0:06:43.967 就會建立一個.git \n 0:06:44.735,0:06:47.551 Ok可是這裡他要 \n 0:06:48.063,0:06:51.135 他目前我所以現在這個還蠻複雜的 \n 0:06:51.647,0:06:57.279 他說是use master as a name因為他這個Git表示他還是 \n 0:06:58.047,0:07:00.351 還是這一個用master \n 0:07:00.607,0:07:03.167 那我們怎麼知道呢我用git()你看 \n 0:07:07.263,0:07:08.287 用git () \n 0:07:10.591,0:07:11.615 沒有耶 \n 0:07:13.151,0:07:13.919 沒有 \n 0:07:14.943,0:07:19.295 所以我的()應該要用main啦你看那() \n 0:07:19.551,0:07:24.415 好所以我就照他的這個指令好了我就要copy這一串 \n 0:07:24.671,0:07:26.463 那我後面要把他叫main \n 0:07:27.231,0:07:28.511 所以我ctrl \n 0:07:29.535,0:07:33.119 你就知道說我們只要用template的話幫你省了多少次 \n 0:07:37.215,0:07:43.359 所以我再繼續做好了ok所以我緊接著我要把他Add進來 \n 0:07:44.127,0:07:45.919 好所以我要git add readme.md \n 0:07:48.991,0:07:53.087 好那就是要把他放到倉儲裡面 \n 0:07:53.599,0:07:59.231 緊接著我要()這一個就繼續跟著他做表示我要add commit \n 0:08:04.095,0:08:08.959 我把我的main設成主分支在這裡我接著做 \n 0:08:09.727,0:08:13.823 所以我說你建空的其實你假設會設的話 \n 0:08:14.079,0:08:17.407 好所以我現在應該已經有()了 \n 0:08:20.479,0:08:21.759 所以我這個時候啊 \n 0:08:22.271,0:08:26.623 一開始是initial還是一個空的empty是空的 \n 0:08:27.647,0:08:30.975 好是所以我這個時候我根本還沒有 \n 0:08:31.487,0:08:33.535 還沒有指到任何的分支 \n 0:08:34.047,0:08:38.399 可是我利用他這個我告訴他我不要用master我要做main \n 0:08:38.911,0:08:40.447 然後到這邊還是沒看到 \n 0:08:40.703,0:08:43.775 可是我add commit之後啊我再執行這個 \n 0:08:44.031,0:08:50.175 main的部分現在就切到等於是我目前的分支是切到這個主分之 \n 0:08:50.687,0:08:51.711 現在已經到這裡啦 \n 0:08:51.967,0:08:54.783 緊接著就是我遠端的部分 \n 0:08:55.295,0:08:59.391 Remote add所以這個指令的意思我們先執行我再告訴你 \n 0:08:59.647,0:09:02.719 所以我們git remote add的意思就是我們 \n 0:09:03.231,0:09:04.255 基本上 \n 0:09:05.791,0:09:08.351 git是指令remote是一個選項 \n 0:09:08.607,0:09:10.655 所以我遠端設一個代號 \n 0:09:11.679,0:09:14.495 我遠端是一個代號這個代號叫origin \n 0:09:15.775,0:09:21.919 這個這個origin會寫在近端.git的config裡面 \n 0:09:22.175,0:09:23.455 相對 \n 0:09:23.967,0:09:25.759 所以這裡很顯然 \n 0:09:26.015,0:09:28.319 我們就要建立什麼 \n 0:09:30.367,0:09:31.391 S.S.H \n 0:09:31.903,0:09:37.535 他指定用SSH所以即便我們設好之後啊我假如沒有 \n 0:09:38.559,0:09:41.631 對應key的話其實我待會是推不回去的 \n 0:09:42.399,0:09:43.935 那沒關係我反正有 \n 0:09:44.959,0:09:48.031 有他的這個帳號我可以幫他設好所以我就 \n 0:09:48.287,0:09:50.079 設好之後那問題來了 \n 0:09:50.591,0:09:52.383 你現在是推不上去了 \n 0:09:55.711,0:09:57.247 現在應該是配不上去了 \n 0:09:59.039,0:10:02.111 應該是他現在問我什麼 \n 0:10:02.367,0:10:03.903 問我的 \n 0:10:04.671,0:10:06.719 這裡我要ctrl+c掉 \n 0:10:08.255,0:10:12.351 它因為目前的話我必須帶出putty幫他弄好 \n 0:10:12.863,0:10:15.167 然後我要把待會要把那個key給他 \n 0:10:15.935,0:10:20.031 最很顯然我現在假設我想要用他的這個 \n 0:10:20.287,0:10:23.103 因為我從這裡是沒辦法取到他的private key了 \n 0:10:24.383,0:10:27.199 我從這裡是沒辦法取到他的private key \n 0:10:28.991,0:10:33.599 所以我必須要從最基礎的key開始做我看他有沒有key \n 0:10:36.159,0:10:42.303 喔它已經有key還把他打那麼長他自己幫他建好所以我就從putty這裡 \n 0:10:42.559,0:10:43.071 這裡 \n 0:10:43.839,0:10:45.631 反正我們後面再用 \n 0:10:46.143,0:10:52.287 ()還是會用到所以我必須要先把putty的這個section先建起 \n 0:10:53.055,0:10:55.615 可是要建這個之前我必須要先有key \n 0:10:56.127,0:10:57.919 好所以我就putty gen \n 0:10:58.175,0:10:59.199 好那我來建 \n 0:11:00.223,0:11:01.759 所以我在這邊我就建 \n 0:11:02.271,0:11:03.039 1把key \n 0:11:03.551,0:11:07.391 可是我在這邊移動的時候他就會有key可是我這裡我必須要 \n 0:11:07.647,0:11:08.927 存兩種格式 \n 0:11:09.951,0:11:14.559 好那表示說我就要把這一串public key要送到他的帳號下 \n 0:11:15.071,0:11:16.607 記下來 \n 0:11:16.863,0:11:23.007 好我幫他設一個key所以我這裡就把public key送進來所以我特別寫說這是cd \n 0:11:23.263,0:11:28.127 2024的那麼我們現在是w2 \n 0:11:28.639,0:11:30.943 他知道說這是第二週建的 \n 0:11:33.247,0:11:37.087 問題是我需要private的好我必須要這個private \n 0:11:37.599,0:11:40.159 必需要是putty的因為我現在在Windows \n 0:11:40.671,0:11:42.975 好所以我必須用這個來 \n 0:12:15.231,0:12:16.255 的key \n 0:12:17.791,0:12:23.935 好然後我就可以把它存進來所以這個我就要把他叫做 \n 0:12:24.191,0:12:24.959 3211 \n 0:12:25.471,0:12:29.055 Cd2024的w2 \n 0:12:29.567,0:12:33.663 因為他的副檔名字ppk所以我一看我就知道 \n 0:12:33.919,0:12:34.687 他是 \n 0:12:35.199,0:12:36.479 putty的private key \n 0:12:36.991,0:12:38.783 好把它save起來 \n 0:12:39.295,0:12:41.343 好那同樣的這個 \n 0:12:42.367,0:12:46.975 因為我們有private key就可以產生public key啊這個到還好 \n 0:12:47.231,0:12:50.559 只是我們還需要一把待會replit要用 \n 0:12:50.815,0:12:52.351 所以我們要把它convert了 \n 0:12:53.119,0:12:54.399 所以我們要把那個 \n 0:12:54.655,0:12:57.215 把這個PPk有沒有Convert成 \n 0:12:58.495,0:13:00.543 Open SSh格式 \n 0:13:01.311,0:13:04.383 我說這個要想辦法弄對所以 \n 0:13:04.639,0:13:08.735 等一下我這邊 \n 0:13:08.991,0:13:13.343 應該是所以這一把Key我們就要叫ID \n 0:13:14.367,0:13:19.231 R s a的可是我們要上傳 \n 0:13:19.999,0:13:21.535 存成txt \n 0:13:23.327,0:13:26.143 我們再來有一個config \n 0:13:26.399,0:13:31.519 所以這個我們就可以不用了那config其實我這邊也順便寫一下嗎 \n 0:13:32.031,0:13:34.591 config我們需要一些資料這個是host \n 0:13:40.991,0:13:43.551 我們要有user對吧 \n 0:13:46.879,0:13:48.671 好然後真正的host name \n 0:13:53.023,0:13:54.047 要存成什麼 \n 0:13:54.303,0:13:59.935 因為我們是ipv4嗎所以不需要有那個proxy之前需要底下還有一行 \n 0:14:00.191,0:14:00.959 現在不用 \n 0:14:01.215,0:14:03.263 好像我們把它save成 \n 0:14:03.775,0:14:06.335 一樣在c的他的key的位置 \n 0:14:06.847,0:14:08.895 這裡好要叫什麼config \n 0:14:09.663,0:14:12.223 因為我們要上傳的 \n 0:14:12.479,0:14:17.343 好所以裡面就會有三個檔案這個是待會要用到的section對應的 \n 0:14:17.599,0:14:19.135 可是不要忘記囉 \n 0:14:19.647,0:14:22.463 你這裡設好的他會存到()取代 \n 0:14:22.719,0:14:25.023 我們待會還要把()帶出來 \n 0:14:25.535,0:14:28.351 他最好的方式就是隨身碟y \n 0:14:28.607,0:14:30.143 也不管你插上去是什麼 \n 0:14:30.399,0:14:36.543 你要這邊還待會還要再額外再講好啦就把它存起來我們先處理putty的 \n 0:14:36.799,0:14:39.871 這個section好這個時候我們就可以進來 \n 0:14:40.639,0:14:45.247 然後選擇我們要連線的是github.com \n 0:14:46.271,0:14:50.879 然後我們的section也較github.com因為他剛剛已經幫我們選了 \n 0:14:51.135,0:14:52.415 這裡先存起來 \n 0:14:52.927,0:14:55.487 存起來之後啊proxy不用設 \n 0:14:55.743,0:14:58.303 但是我沒有()這裡要設吧 \n 0:14:58.815,0:15:00.351 好所以我們就要選 \n 0:15:00.863,0:15:02.911 對應的key給他 \n 0:15:03.167,0:15:08.031 可是這把key並不是在Y然後我先我先用好了我先確定 \n 0:15:08.287,0:15:10.591 我們可以完成把它推上去 \n 0:15:10.847,0:15:12.383 讓第一組開始工作對吧 \n 0:15:12.639,0:15:15.455 所以應該要放在 \n 0:15:15.967,0:15:22.111 這裡用在C是比較不好因為因為你變成說待會重新開機就不見了 \n 0:15:22.367,0:15:27.231 所以我們待會還會想辦法把它改回y放在我們的可攜程式上面 \n 0:15:27.487,0:15:30.559 打開 \n 0:15:31.327,0:15:33.887 然後我們要這裡還要重新存 \n 0:15:34.911,0:15:40.287 因為我們已經修改成而且你自己要先按open因為他會送一個key過來，假如你沒有accept是不會成功 \n 0:15:40.799,0:15:43.615 假如你沒有accept的話你是不會成功 \n 0:15:43.871,0:15:47.455 因為你沒有辦法再連線的時候接這一個key \n 0:15:47.967,0:15:54.111 一旦到這裡表示說我們已經順利的用這section設定過來所以這 \n 0:15:54.367,0:15:54.879 就不用了 \n 0:15:55.135,0:16:01.279 好在這個時候啊我們剛才執行的那個部分應該就有機會成功了 \n 0:16:02.815,0:16:04.351 想要連線是什麼 \n 0:16:04.607,0:16:05.631 因為remote add \n 0:16:06.911,0:16:10.495 我們想要用git當帳號就是我們剛剛的user \n 0:16:10.751,0:16:12.799 然後這個是什麼這個是section \n 0:16:13.567,0:16:16.383 這個是拿到的分組的帳號 \n 0:16:16.639,0:16:19.199 這個是第一組的分組倉儲 \n 0:16:19.455,0:16:24.575 好啦所以我們就把這個再重新執行一遍假如能夠推上去的話 \n 0:16:26.623,0:16:29.951 假如能夠推上去的這個已經設好應該是下一個 \n 0:16:30.463,0:16:31.999 那這個意思是什麼 \n 0:16:32.767,0:16:38.399 你想要去看他這個倉儲對應的意思就是我們要設 \n 0:16:38.655,0:16:39.679 () \n 0:16:42.239,0:16:45.823 設()的意思這個u代表是上層 \n 0:16:46.335,0:16:48.127 所以我現在push \n 0:16:48.639,0:16:53.503 我假如沒有這個-u意思就說我沒有設成origin \n 0:16:54.015,0:16:56.063 就是main而且上一層 \n 0:16:56.319,0:16:58.367 你每一次都要Push origin main \n 0:16:59.391,0:17:01.183 可是你讓我這樣設之後啊 \n 0:17:01.439,0:17:06.559 所謂的上層你不特別講他就是origin這個代表什麼 \n 0:17:06.815,0:17:08.351 origin就是這個連結啊 \n 0:17:09.375,0:17:12.447 那main是什麼main是主分支看可不可以成功 \n 0:17:18.079,0:17:19.103 上去了嗎 \n 0:17:19.359,0:17:19.871 上去 \n 0:17:20.383,0:17:26.527 意思就是表示我們那個section是成功的因為我們通過他的權限為什麼我已經把Public key \n 0:17:26.783,0:17:30.623 丟到他那邊所以我們剛剛空的那一個倉儲應該 \n 0:17:30.879,0:17:32.159 已經有資料了吧 \n 0:17:32.927,0:17:34.463 可是空資料 \n 0:17:34.975,0:17:35.743 空資料 \n 0:17:38.815,0:17:40.095 所以接下來怎麼辦 \n 0:17:40.351,0:17:43.167 接下來就跑到我們的template的位置啊 \n 0:17:43.935,0:17:46.495 好那我們剛剛已經講了在這裡 \n 0:17:47.519,0:17:50.335 我們理論上是要給你template嗎 \n 0:17:50.591,0:17:53.919 好那我的template不就在這裡嗎 \n 0:17:54.175,0:17:55.967 我的template不就是這一個嗎 \n 0:17:56.479,0:18:02.623 Cmsi有沒有這個啊所以我要clone它下來ctrl+c \n 0:18:02.623,0:18:04.623 把它clone到tmp \n 0:18:04.671,0:18:06.719 這我這邊要 \n 0:18:07.487,0:18:11.327 切換到c切換到tmp然後我要去git clone \n 0:18:12.095,0:18:17.215 因為你沒有要推你也沒有權限推 \n 0:18:17.471,0:18:21.055 而且我知道他沒有子模組所以這裡不需要 \n 0:18:22.079,0:18:23.359 recourse submodel \n 0:18:23.871,0:18:30.015 因為我要的就是他的資料然後待會要把它放到我空的分組倉儲上就這樣 \n 0:18:30.271,0:18:31.039 然後再推回去 \n 0:18:31.295,0:18:32.831 好所以我就先把他先抓下來 \n 0:18:33.087,0:18:36.927 抓下來你不是要他的版本 \n 0:18:37.183,0:18:38.975 他這裡為什麼會 \n 0:18:39.999,0:18:43.071 為什麼會這樣子問我 \n 0:18:43.327,0:18:46.399 我想一下 \n 0:18:48.447,0:18:54.591 因為我沒有設不要用他的權限其實他本來就沒有權限啊我先試看 \n 0:18:54.847,0:18:57.407 假如不行的話 \n 0:18:57.663,0:19:00.223 我們就必須要逮出啊 \n 0:19:00.735,0:19:03.295 還是一樣好我這邊先暫停一下 \n 0:19:03.551,0:19:08.671 我們拍第二個因為我這邊要找找到上學期的那上學期的網站會在哪裡 \n 0:19:10.463,0:19:16.351 應該在其實我還是還沒有把它關掉啦不過 \n 0:19:16.607,0:19:18.655 哇我沒有ipv4 \n 0:19:20.191,0:19:25.311 所以我這個時候變成要把這個命運多舛 \n 0:19:25.823,0:19:28.639 所以我變成了因為這一台在ipv6 \n 0:19:29.663,0:19:32.991 所以我必須要設代理主機才能連過去 \n 0:19:34.015,0:19:40.159 那我想一下我可以連嗎應該還在喔 \n 0:19:40.671,0:19:46.815 mdtw我連到上學期是 \n 0:19:48.351,0:19:49.887 Note嗎 \n 0:19:52.959,0:19:56.287 然後這邊應該有 \n 0:19:57.823,0:20:00.383 那個叫config嗎 \n 0:20:06.015,0:20:09.343 忘記存在哪裡 \n 0:20:11.647,0:20:16.255 可能我先錄到這裡我找到我在錄第二個好了 \n 0:20:17.535,0:20:20.351 那這邊可以省下一點時間 \n', 'tags': '', 'url': 'cd2024_2b_5_w2 第一組組長建立 Team 並設定分組倉儲.html'}, {'title': 'cd2024_2b_6_w2 從第一組空倉儲建立 cmsimde_site 內容', 'text': '\n \n 0:00:06.144,0:00:08.448 好所以我們剛才就是 \n 0:00:08.960,0:00:13.824 已經建立好就是針對我們剛剛使用的這一個 \n 0:00:14.848,0:00:16.384 那麼空倉儲啊 \n 0:00:16.896,0:00:20.736 已經建立了第一組的這個分組倉儲可是 \n 0:00:20.992,0:00:24.576 我們目前也只有多了一個readme我們必須要把 \n 0:00:25.088,0:00:28.672 我們要的這一個分組的課程網頁 \n 0:00:29.184,0:00:31.744 對應的這一個資料把它丟上來 \n 0:00:32.000,0:00:32.512 OK \n 0:00:33.024,0:00:36.608 所以我們需要clone這麼剛剛做了半天啊 \n 0:00:38.400,0:00:39.680 就是因為 \n 0:00:39.936,0:00:42.496 在我們的點.git config裡面 \n 0:00:44.544,0:00:46.592 現在想要()這一個 \n 0:00:46.848,0:00:49.664 微軟的這個sslVerify的設定 \n 0:00:49.920,0:00:56.064 因為他想要我們把Key登記到系統那我們為什麼不把他登記到系統因為這個系統是 \n 0:00:56.320,0:00:57.344 防寫的 \n 0:00:57.600,0:00:59.392 所以你講每一次都要 \n 0:00:59.648,0:01:05.792 登記的話就比較麻煩所以我們就直接帶著key的位置而且待會我們把他只到y \n 0:01:06.048,0:01:07.584 我們只要一起動 \n 0:01:07.840,0:01:10.400 把主態寫進去的話我們就不需要 \n 0:01:11.168,0:01:14.752 我不需要每一次都做因為你本來就需要按這個start \n 0:01:15.520,0:01:16.288 點bat \n 0:01:16.800,0:01:19.872 你的環境應該就必須準備好 \n 0:01:20.384,0:01:21.664 那這個指令啊 \n 0:01:21.920,0:01:24.992 你假如用隨身碟的話也經常有用 \n 0:01:25.760,0:01:29.088 因為你每次插進去對系統來講都是新的 \n 0:01:29.344,0:01:30.112 硬體 \n 0:01:30.624,0:01:34.208 那你就告訴他說只要是我插的這一個隨身碟 \n 0:01:34.464,0:01:35.488 他都是安全的 \n 0:01:35.744,0:01:39.328 你就不需要每一次都執行一個git config \n 0:01:40.096,0:01:43.424 Ok然後這個就是我們剛剛利用這一個 \n 0:01:43.936,0:01:45.728 main來當作我們 \n 0:01:45.984,0:01:47.008 init的 \n 0:01:47.264,0:01:49.568 把這個defaultBranch我們寫的 \n 0:01:49.824,0:01:51.872 好所以這三個設定基本上 \n 0:01:53.152,0:01:59.296 就是你可能會碰到的問題那我們待會剛剛碰到的問題就是我們想要透過代理主機 \n 0:02:00.064,0:02:06.208 來點到一台只有ipv6的這一個主機但是他沒有辦法跟這 \n 0:02:07.744,0:02:08.768 所以把它拿掉 \n 0:02:09.024,0:02:13.120 我要拿掉之後我們現在想要取我目前的話是已經有 \n 0:02:13.376,0:02:14.656 對應的這個key \n 0:02:14.912,0:02:19.520 以及只有readme的這個倉儲我們現在想辦法拿下我們的Template \n 0:02:19.776,0:02:20.800 所以我就 git clone \n 0:02:21.568,0:02:23.872 然後把對應的這個 \n 0:02:24.384,0:02:30.528 看看能不能把我們md cycu下面的csmi mde對應的 \n 0:02:36.160,0:02:38.208 所以我用git clone因為他已經 \n 0:02:38.720,0:02:40.000 沒有子模組 \n 0:02:40.768,0:02:42.304 試著把他抓下來 \n 0:02:42.560,0:02:45.120 他抓下來我們不能拿他的版本喔 \n 0:02:45.376,0:02:48.704 你必須只取它的程式內容 \n 0:02:49.216,0:02:53.824 而且是當作我們的cmsi mde \n 0:02:54.592,0:02:57.408 所以這裡面你copy到的這個資料 \n 0:02:58.432,0:03:00.992 基本上必須要只取他的資料 \n 0:03:01.248,0:03:07.392 所以我們進來之後我們就看到他對吧所以這個就是我們要了那readme看你要不要把它蓋過去 \n 0:03:07.648,0:03:09.184 所以這個.git \n 0:03:10.208,0:03:13.536 這個template倉儲對應的這個不能要 \n 0:03:14.048,0:03:15.328 因為這個是他的版本 \n 0:03:15.840,0:03:17.888 除了這個版本之外的話 \n 0:03:18.144,0:03:19.680 底下這個全部 \n 0:03:19.936,0:03:22.240 可以全部把它所以你ctrl+a \n 0:03:23.008,0:03:24.544 這個拿掉 \n 0:03:25.568,0:03:27.872 然後底下這邊 \n 0:03:28.640,0:03:32.480 應該還好啦所以我們就直接把他ctrl+c \n 0:03:32.992,0:03:34.528 然後把他搬到 \n 0:03:35.040,0:03:38.880 就是除了.git之外我們就是把它搬過來 \n 0:03:39.648,0:03:42.464 所以我們這個就可以直接把它貼上 \n 0:03:43.232,0:03:45.024 然後我們在add commit push \n 0:03:46.048,0:03:49.888 喔那要取代readme我不取代然後我們就 \n 0:03:50.076,0:03:52.076 好啦我們把它取代沒關係 \n 0:03:53.472,0:03:54.496 我們取代沒關係 \n 0:03:55.008,0:03:58.080 好是這樣的話我在add commit push再丟回去 \n 0:03:58.336,0:04:02.432 因為現在我們的這一個設定我們只要把他帶出來的話 \n 0:04:03.200,0:04:08.320 我們剛剛是用SSH喔所以你看現在第一組的這個分組倉儲裡面的點git \n 0:04:09.088,0:04:11.904 他的config是用ssh所以我們把他帶出來看 \n 0:04:12.672,0:04:13.184 有沒有 \n 0:04:15.744,0:04:19.327 所以表示說我們還需要處理這個section喔 \n 0:04:20.863,0:04:26.751 這個github.com他們的這個section待會要想辦法弄到他們所有組員的 \n 0:04:27.263,0:04:31.103 我不是組員啦其實只有組長啊因為現在是綁到他的帳號下嗎 \n 0:04:31.359,0:04:32.639 還要給組長 \n 0:04:32.895,0:04:34.687 否則他要自己再重新建 \n 0:04:35.199,0:04:39.039 好所以這樣的話我們應該add commit push應該沒什麼問題 \n 0:04:39.551,0:04:41.343 抱歉我們就更換目錄 \n 0:04:41.599,0:04:44.159 我們剛剛是在2B \n 0:04:45.183,0:04:46.463 然後是() \n 0:04:47.487,0:04:49.535 b班的G1 \n 0:05:00.799,0:05:02.591 cmsi mde \n 0:05:03.103,0:05:04.639 site的data \n 0:05:08.479,0:05:11.039 所以這裡面我們現在就是一旦 \n 0:05:11.295,0:05:15.903 手動複製之後那我們手動複製的檔案就是取下這個 \n 0:05:16.671,0:05:22.815 那他的.git目錄不能複製以外全部把它搬到我們第一組的這個分組 \n 0:05:23.327,0:05:24.351 倉儲裡面 \n 0:05:24.607,0:05:26.143 然後緊接著是Add \n 0:05:26.399,0:05:27.167 所有的 \n 0:05:27.679,0:05:28.447 然後在 \n 0:05:28.703,0:05:29.727 進行提交 \n 0:05:30.239,0:05:32.799 然後假如完成之後我們再git push \n 0:05:33.311,0:05:36.639 所以這樣假如完成的話你只需要進來 \n 0:05:37.151,0:05:39.711 設定對應的github page \n 0:05:40.223,0:05:42.783 你的分組的網頁就出來 \n 0:05:43.039,0:05:46.623 好在這裡面其實用這些都不用做的啦 \n 0:05:47.135,0:05:49.439 可是不曉得為什麼現在的github classroom \n 0:05:50.463,0:05:53.535 齁不知道是因為我們的設定 \n 0:05:54.047,0:05:56.095 還是說他裡面的更動 \n 0:05:56.351,0:06:01.215 所以我們現在這邊應該正在推送吧還沒有送上來 \n 0:06:01.983,0:06:03.775 還沒有送完現在是80 percent \n 0:06:04.543,0:06:07.871 所以從剛才的話我們就一路取得 \n 0:06:08.383,0:06:11.199 對應的連結組長進來 \n 0:06:11.455,0:06:13.247 按照我們的規定 \n 0:06:13.759,0:06:16.831 好所以我們每一組到這邊都一樣喔 \n 0:06:17.599,0:06:21.183 你組長要建的team假如你是第二組你就是mid B班 \n 0:06:21.695,0:06:22.207 g2 \n 0:06:22.975,0:06:25.791 345依此類推到第六 \n 0:06:26.047,0:06:26.559 好所以 \n 0:06:26.815,0:06:29.887 一旦這樣的話我們就等在這邊 \n 0:06:31.167,0:06:33.471 然後他這邊只要上傳結束 \n 0:06:34.239,0:06:36.287 應該是上來了 \n 0:06:38.079,0:06:42.431 上來之後我們就進入他的倉儲 \n 0:06:42.687,0:06:44.991 然後把他的github page設起來 \n 0:06:45.503,0:06:48.063 然後其他的組員一旦加入之後 \n 0:06:48.575,0:06:49.343 Join \n 0:06:49.855,0:06:50.879 他就有權限 \n 0:06:51.135,0:06:54.207 好所以我就幫他把這一個網頁建起來 \n 0:06:54.463,0:06:56.767 一旦弄完就可以把他交回 \n 0:06:57.023,0:06:57.791 給第一組 \n 0:06:58.303,0:07:02.143 好待會我們就把classroom的連結我們設在 \n 0:07:02.655,0:07:04.959 我們的團隊上面然後每個人 \n 0:07:05.215,0:07:09.055 每個組長點一下就開始可以做以下的工作 \n 0:07:09.567,0:07:13.407 好那待會我們就把這個影片啊我們把這兩個影片 \n 0:07:13.663,0:07:15.711 把它錄製 \n 0:07:15.967,0:07:18.271 放到我們的網誌上 \n 0:07:20.938,0:07:22.938 所以這個應該是ok \n', 'tags': '', 'url': 'cd2024_2b_6_w2 從第一組空倉儲建立 cmsimde_site 內容.html'}, {'title': 'w3', 'text': '說明 如何將 41123130 的個人倉儲設為 2a-midag2 分組倉儲的子模組 \n 說明 如何將組員的個人倉儲納入分組倉儲成為子模組 \n 說明 如何在 Replit 維護分組倉儲 \n 說明 使用 Gitpod 維護個人網站 \n 說明 使用 Gitpod 維護分組網站 \n 說明 如何利用 LaTeX 協同建立分組報告 \n 利用 [OBS] 加上廣播系統錄製的:\xa0 如何設定個人倉儲中的 Pelican 網誌', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '說明 如何在 Replit 檢視靜態網站 教學影片 \n 說明 如何下載 replit_main2.7z 並在倉儲中建立兩個檔案 教學影片', 'tags': '', 'url': 'w4.html'}]};