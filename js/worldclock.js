function updateClocks() {
  // 現在の時刻を取得
  var now = new Date();

  // 各都市のオフセットを設定（分単位）
  var offsets = {
    vancouver: -420,
    newyork: -240,
    london: 0,
    tokyo: 540
  };

  // 各都市の時刻を計算し表示
  for (var city in offsets) {
    if (offsets.hasOwnProperty(city)) {
      var offset = offsets[city];
      var cityTime = new Date(now.getTime() + offset * 60000); // オフセットをミリ秒に変換
      var clockElement = document.getElementById(city);
      clockElement.innerHTML = city + ': ' + formatTime(cityTime);
    }
  }
}

function formatTime(date) {
  var hours = date.getUTCHours();
  var minutes = date.getUTCMinutes();
  var seconds = date.getUTCSeconds();

  // 時刻の桁数を2桁に揃える
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return hours + ':' + minutes + ':' + seconds;
}

// 1秒ごとに時刻を更新する
setInterval(updateClocks, 1000);
