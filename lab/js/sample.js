// 配列を用意する
var data = new Array();
// 値を収めていく
data['name'] = '山田太郎';
data['mail'] = 'taro@yamada';
data['tel'] = '090-1234-5678';
// 関数を作成する
data.print = function() {
    var result = '<p>' + this.name + '</p>';
    result += '<p>' + this.mail + '</p>';
    result += '<p>' + this.tel+ '</p>';
    document.write(result);
}
// 処理を実行する
data.print(data);
