const time = document.getElementById("currentTime");    //timneに現在の日時を表示させるための要素を取得
const updatetime = function(){
    const now = new Date(); //現在の日時を取得するためのDateオブジェクトを作成
    const display =new Intl.DateTimeFormat("ja-JP",{
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }).format(now).replaceAll("/","-");
    
    const year = now.getFullYear();
    const month = now.getMonth() + 1;  //月は0から始まるため、1を加える必要がある   
    const day = now.getDate();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    time.textContent = display;
};


setInterval(updatetime, 1000);
updatetime();
