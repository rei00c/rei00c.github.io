// 配列を用意する
var data = new Array();
// 値を収めていく
data['name'] = '山田太郎';
data['mail'] = 'taro@yamada';
data['tel'] = '090-1234-5678';
// 関数を作成する
function print(arr) {
    var result = '<p>' + arr['name'] + '</p>';
    result += '<p>' + arr['mail'] + '</p>';
    result += '<p>' + arr['tel'] + '</p>';
    document.write(result);
}
// 処理を実行する
print(data);
