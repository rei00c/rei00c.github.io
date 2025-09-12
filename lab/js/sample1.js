function init() {
  // id='txt'のDOMを得る
  var txt = document.getElementById('txt1');
  // 保存した値を取り出す
  var obj_str = localStorage.getItem('saved_content');
  // オブジェクトに変換
  var obj = JSON.parse(obj_str);
  // id='msg'のDOMを得る
  var msg = document.getElementById('msg');
  // <ul>タグのDOMを生成
  var ul = document.createElement('ul');
  // <li>タグのDOMを生成
  var li_title = document.createElement('li');
  li_title.textContent = obj.title;
  var li_content = document.createElement('li');
  li_content.textContent = obj.content;
  var li_created = document.createElement('li');
  li_created.textContent = new Date(obj.created);
  // <li>タグを<ul>タグに組み込む
  ul.appendChild(li_title);
  ul.appendChild(li_content);
  ul.appendChild(li_created);
  // <ul>をDOMオブジェクトに組み込む
  msg.appendChild(ul);
}

function clickBtn() {
  // id='title'のDOMを得る
  var title = document.getElementById('title');
  // id='content'のDOMを得る
  var content = document.getElementById('content');
  // id='msg'のDOMを得る
  var msg = document.getElementById('msg');
  // オブジェクトを作成
  var obj = new Object();
  // オブジェクトに値を設定
  obj.title = title.value;
  obj.content = content.value;
  obj.created = Date.now();
  // JSON文字列に変換
  var obj_str = JSON.stringify(obj);
  // ローカルストレージに保存
  localStorage.setItem('saved_content', obj_str);
  // valueを使ってメッセージを作成
  var result = " 「" + obj.title + "」のデータを保存しました。";
  // テキストをDOMのコンテンツに設定
  msg.textContent = result;
  // 入力フィールドを空にする 
  title.value = '';
  content.value = '';
}
