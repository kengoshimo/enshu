const birthdayElement = document.getElementById("birthday");
const targetDate = function() {
    const now = new Date(); 
    const bimonth = 4;
    const biday = 4; 
    let nextbirthday = new Date(now.getFullYear(), bimonth - 1, biday, 0, 0, 0); // 次の誕生日の日付を作成

    if (now > nextbirthday) {
        nextbirthday.setFullYear(nextbirthday.getFullYear() + 1); // 次の誕生日が過ぎている場合は、次の年に設定
    }

    const timeDifference = nextbirthday - now; // 現在の日時と次の誕生日の差を計算

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);
    
    birthdayElement.textContent = `次の誕生日まで あと${days} 日 ${hours} 時間 ${minutes} 分 ${seconds} 秒`;
};

setInterval(targetDate, 1000);
targetDate();