function init() {
  // id='txt'のDOMを得る
  var txt = document.getElementById('txt1');
  // 保存した値を取り出す
  var str = localStorage.getItem('msg');
  // id='msg'のDOMを得る
  var msg = document.getElementById('msg');
  // テキストをDOMのコンテンツに設定
  msg.textContent = 'メッセージ:「' + str + '」';
}

function clickBtn() {
  // id='txt'のDOMを得る 
  var txt = document.getElementById('txt1');
  localStorage.setItem('msg', txt.value);
  // valueを使ってメッセージを作成
  var result = 'メッセージ:「' + txt.value + '」を保存しました。';
  // id='msg'のDOMを得る
  var msg = document.getElementById('msg');
  // テキストをDOMのコンテンツに設定
  msg.textContent = result;
  // 入力フィールドを空にする
  txt.value = '';
}
