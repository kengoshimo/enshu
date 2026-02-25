const time = document.getElementById("currentTime");    //timneに現在の日時を表示させるための要素を取得
const updatetime = function(){　　　　　　　　　　　　　　//現在の日時を取得するための関数を定義
    const now = new Date();                             //現在の日時を取得するためのDateオブジェクトを作成
    
    const year = now.getFullYear();
    const month = now.getMonth() + 1;  //月は0から始まるため、1を加える必要がある   
    const day = now.getDate();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    time.textContent = `${year}-${month}-${day}  ${hours}:${minutes}:${seconds}`;  //変数の中の値をフォーマットして、time要素のテキストコンテンツに表示　$(変数)
};


setInterval(updatetime, 1000);
updatetime();
