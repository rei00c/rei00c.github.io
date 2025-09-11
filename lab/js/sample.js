function clickBtn() {
  // id='txt'のDOMを得る
  var txt = document.getElementById('txt1');
  // valueを使ってメッセージを作成
  var result ='この色は、 ' + txt.value + ' です。';
  // id='msg'のDOMを得る
  var msg = document.getElementById('msg');
  msg.textContent = result;
  msg.style.color = txt.value;
}
