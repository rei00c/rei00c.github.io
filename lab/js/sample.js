// 金額
var price = 19800;
// 税率
var tax = 0.08;
// 計算
var result = price * (1.0 + tax);
// 結果
var message = price + "円の税込価格は" + result + "円。";
document.write('<p>' + message + '</p>');
