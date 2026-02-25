const birthdayElement = document.getElementById("birthday");
const targetDate = function() {
    const now = new Date(); 
    const birmonth = 4;
    const birday = 4; 
    let nextbirthday = new Date(now.getFullYear(), birmonth - 1, birday, 0, 0, 0); // 次の誕生日の日付を作成

    if (now > nextbirthday) {
        nextbirthday.setFullYear(nextbirthday.getFullYear() + 1); // 次の誕生日が過ぎている場合は、次の年に設定
    }

    const timeDifference = nextbirthday - now; // 現在の日時と次の誕生日の差を計算

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); //一日分の秒数で割って、残りの時間を切り捨てる
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);
    
    birthdayElement.textContent = `あと ${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
}
setInterval(targetDate, 1000);
targetDate();

const ageElement = document.getElementById("age");
const calculateAge = function() {
    const now = new Date();
    const birthYear = 2003; // 誕生年を指定
    const birthMonth = 4; // 誕生月を指定
    const birthDay = 4; // 誕生日を指定
    let age = now.getFullYear() - birthYear; // 年齢を計算
    if (now.getMonth() + 1 < birthMonth || (now.getMonth() + 1 === birthMonth && now.getDate() < birthDay)) {
        age--; // 誕生日がまだ来ていない場合は年齢を1減らす
    }
    ageElement.textContent = `現在の年齢: ${age}歳`;
}
setInterval(calculateAge, 1000);
calculateAge();