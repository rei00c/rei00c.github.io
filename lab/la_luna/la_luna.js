function JulianNow() {
  return Date.now() / 86400000 + 2440587.5;
}

function xint(value) {
  return value >= 0 ? Math.floor(value) : Math.ceil(value);
}

function dsin(degrees) {
  return Math.sin(degrees * 0.017453292519943);
}

function getNewMoon(julian) {
  const k = xint((julian - 2451550.09765) / 29.530589);
  const t = k / 1236.85;
  const nmoon =
    2451550.09765 +
    29.530589 * k +
     0.0001337 * t * t -
    0.4072 * dsin(201.5643 + 385.8169 * k) +
    0.17241 * dsin(2.5534 + 29.1054 * k);
  return nmoon;
}

function calculateLuna() {
  const jd0 = JulianNow();
  let nmoon = getNewMoon(jd0);
  if (nmoon > jd0) {
    nmoon = getNewMoon(jd0 - 1.0);
  }
  const luna = jd0 - nmoon;
  const lDays = luna.toFixed(1);  // 小数点第1位まで表示する

  let img, lStates;
  if (luna < 2) {
    img = "spacer.gif";
  } else if (luna < 4) {
    img = "luna03.gif";
  } else if (luna < 6) {
    img = "luna05.gif";
  } else if (luna < 9) {
    img = "luna08.gif";
  } else if (luna < 13) {
    img = "luna11.gif";
  } else if (luna < 15) {
    img = "luna14.gif";
  } else if (luna < 19) {
    img = "luna17.gif";
  } else if (luna < 22) {
    img = "luna20.gif";
  } else if (luna < 24) {
    img = "luna23.gif";
  } else if (luna < 27) {
    img = "luna26.gif";
  } else {
    img = "spacer.gif";
  }

  document.getElementById("date").textContent = new Date().toLocaleDateString();
  document.getElementById("time").textContent = new Date().toLocaleTimeString();
  document.getElementById("lStates").textContent = lStates;
  document.getElementById("lDays").textContent = `月齢 ${lDays}日`;
  document.getElementById("moonImage").src = "./images/" + img;
}

