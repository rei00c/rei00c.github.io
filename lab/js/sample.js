// 最大値
var max = 100;
// 現在の値
var num = 1;
// 合計を加算していくための変数 
var total = 0;
// 最大値まで繰り返す
for (var num = 1; num <= max; num++) {
    // 合計に現在の値を加算
    total += num;
}
// 合計を表示
document.write('<p>' + max + 'までの合計は、' + total + 'です。</p>');
