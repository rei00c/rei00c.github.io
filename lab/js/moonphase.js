// JavaScriptで月齢を計算する関数
function calculateMoonAge() {
  // 現在の日付を取得
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();

  // ユリウス日の計算式を使用して日付を変換
  var a = Math.floor((14 - month) / 12);
  var y = year + 4800 - a;
  var m = month + 12 * a - 3;
  var jd = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;

  // 2000年1月6日（ユリウス日=2451550.1）を起点として月齢を計算
  var baseDate = new Date(2000, 0, 6);
  var baseJulianDate = 2451550.1;
  var daysSinceBase = (jd - baseJulianDate) + 0.5;

  var synodicMonth = 29.53058867; // 月の平均の周期（日数）
  var moonAge = (daysSinceBase % synodicMonth) / synodicMonth * 30; // 月齢を計算（近似値）

  return moonAge;
}

// ページが読み込まれたときに月齢を表示する関数を呼び出す
window.onload = function () {
  var moonAgeElement = document.getElementById("moonAge");
  var moonAge = calculateMoonAge();
  moonAgeElement.innerHTML = moonAge.toFixed(1) + "日"; // 月齢を小数点第1位まで表示
};
