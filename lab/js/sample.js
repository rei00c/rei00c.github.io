function clickBtn() {
  // id='txt'のDOMを得る
  var txt = document.getElementById('txt1');
  // valueを使ってメッセージを作成
  var result ='こんにちは、' + txt.value + 'さん。';
  // id='msg'のDOMを得る
  var msg = document.getElementById('msg');
  msg.textContent = result;
}
