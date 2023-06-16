function calculateDate() {
  // 入力された日付を取得
  var inputDate = document.getElementById("input-date").value;

  // 入力された日付をパースして、Dateオブジェクトを作成
  var specifiedDate = new Date(inputDate);

  // 指定日から180日後の日付を計算
  var futureDate = new Date(specifiedDate.getTime() + (180 * 24 * 60 * 60 * 1000));

  // 結果を表示する要素を取得
  var currentDateElement = document.getElementById("current-date");
  var elapsedDaysElement = document.getElementById("elapsed-days");
  var futureDateElement = document.getElementById("future-date");

  // 現在の日付を表示
  currentDateElement.innerHTML = "現在の日付: " + new Date().toLocaleDateString();

  // 指定日から経過した日数を表示
  var elapsedDays = Math.floor((new Date() - specifiedDate) / (24 * 60 * 60 * 1000));
  elapsedDaysElement.innerHTML = "指定日から経過した日数: " + elapsedDays + "日";

  // 180日後の日付を表示
  futureDateElement.innerHTML = "180日後は、" + futureDate.toLocaleDateString() + "です。";
}
