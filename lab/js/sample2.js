var msg; // id="msg"
var menu; // id="menu"
var form; // id="form"
var button; // id="button"
var hidden; // id="hidden"

// 初期化処理
function init() {
  // 必要なDOMを変数に取り出しておく
  msg = document.getElementById('msg');
  menu = document.getElementById('menu');
  form = document.getElementById('form');
  button = document.getElementById('button');
  hidden = document.getElementById('hidden');
  // フォームとメニューの生成
  createDefaultForm();
  createMenu();
}

// 計算式登録用フォームの作成
function createDefaultForm() {
  var tr, th, td, input;
  var names = ['name', 'fields', 'formula'];
  form.innerHTML = '';
  // 繰り返しで３つのフィールドを作成
  for(var i = 0;i < 3;i++) {
    // <tr>,<th>,<td>タグを作る
    tr = document.createElement("tr");
    th = document.createElement("th");
    th.textContent = names[i];
    td = document.createElement("td");
    // <input>タグを作る
    input = document.createElement("input");
    input.type = 'text';
    input.id = names[i];
    // formula用のフィールドは横幅を広げる
    if (input.id == 'formula') {
      input.size = '60';
    }
    // 作ったタグの組み込み
    td.appendChild(input);
    tr.appendChild(th);
    tr.appendChild(td);
    form.appendChild(tr);
  }
  // hidden, msgの値の設定
  hidden.value = '';
  msg.textContent = '新しい計算式の入力';
  // onclickイベントの関数を削除
  button.removeEventListener('click', doCalcAction);
  button.removeEventListener('click', doDefaultAction);
  // buttonのonclickイベントにdoDefaultActionを設定
  button.addEventListener('click', doDefaultAction, false);
}

// メニューの作成
function createMenu() {
  // menuをクリア
  menu.innerHTML = '';
  // 新しい式を作成メニューを用意
  var opt = document.createElement("option");
  opt.id = '0';
  opt.textContent = '新しい式を作成';
  opt.value = 'default';
  menu.appendChild(opt);
  // 登録済みの関数の個数を取り出す
  var count = localStorage.getItem('count') * 1;
  // 繰り返しでメニュー項目を作成していく
  for (var i = 1;i <= count;i++) {
    // <option>タグの作成
    opt = document.createElement("option");
    opt.id = i;
    // ローカルストレージからオブジェクトを取得
    var opt_val = localStorage.getItem('formula_' + i);
    var opt_obj = JSON.parse(opt_val);
    // 必要な値を<option>に設定し組み込む
    opt.textContent = opt_obj.name;
    opt.value = 'formula_' + i;
    menu.appendChild(opt);
  }
}

// 計算式登録用のプッシュボタン用関数
function doDefaultAction() {
  // 登録済みの関数の個数を取り出す
  var count = localStorage.getItem('count') * 1;
  // オブジェクト作成し、プロパティを設定
  var obj = new Object();
  obj.name = document.getElementById('name').value;
  obj.fields = document.getElementById('fields').value;
  obj.formula = document.getElementById('formula').value;
  // オブジェクトをローカルストレージに保存
  localStorage.setItem('formula_' + ++count, JSON.stringify(obj));
  // 登録済みの関数の個数を更新
  localStorage.setItem('count', count);
  // フォームとメニューを生成する
  createDefaultForm();
  createMenu();
  alert('追加しました。');
}

// メニューから選んだ計算式用のフォーム生成
function doChangeForm(event) {
  // 選んだメニュー項目のvalueを取得
  var value = event.target.value;
  // valueがdefaultだったらcreateDefaultForm実行
  if (value == 'default') {
    createDefaultForm();
    return;
  }
  // ローカルストレージから値を取得
  var obj_str = localStorage.getItem(value);
  // オブジェクトに変換し、必要な値を用意する
  var obj = JSON.parse(obj_str);
  var fields = obj.fields.split(',');
  var formula = obj.formula;

  var tr, th, td, label, input;
  form.innerHTML = '';
  // fields配列を元にフィールドを生成
  for(var i = 0;i < fields.length;i++) {
    // 必要なタグのDOMを作成
    tr = document.createElement("tr");
    th = document.createElement("th");
    th.textContent = fields[i];
    td = document.createElement("td");
    // <input>タグを生成
    input = document.createElement("input");
    input.type = 'text';
    input.id = fields[i];
    // 作成したタグを組み込む
    td.appendChild(input);
    tr.appendChild(th);
    tr.appendChild(td);
    form.appendChild(tr);
  }
  // hidden, msgの値設定
  hidden.value = value;
  msg.textContent = obj.name;
  // onclick イベントの関数を削除 
  button.removeEventListener('click', doCalcAction);
  button.removeEventListener('click', doDefaultAction);
  // buttonのonclickイベントにdoCalcAction設定
  button.addEventListener('click', doCalcAction, false);
}

// 計算式選択時のプッシュボタン用関数
function doCalcAction() {
  // hiddenの値を元にオブジェクトを用意
  var obj_str = localStorage.getItem(hidden.value);
  var obj = JSON.parse(obj_str);
  // names, count, formulaを用意
  var names = obj.fields.split(',');
  var count = names.length;
  var formula = obj.formula;
  // formulaの値名を実際の値に置換する
  for(var i = 0;i < count;i++) {
    var name = names[i];
    var value = document.getElementById(name).value;
    formula = formula.split(name).join(value);
  }
  // formulaの式を実行し結果を表示
  var result = eval(formula);
  msg.textContent = 'result: ' + result;
}
