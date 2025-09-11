function clickBtn() {
  var msg = document.getElementById('msg');
  var txt = document.getElementById('txt1');
  var list = document.getElementById('list');
  var tag = document.createElement('li');
  tag.textContent = txt.value;
  list.appendChild(tag);
  msg.textContent = '「' + txt.value + '」を追加しました。';
  text.value = '';
}
