setInterval(function () {
  var currentTime = new Date().getTime() / 1000; // UNIX 時間に変換
  document.getElementById("d2").innerHTML = currentTime;
}, 1000);
