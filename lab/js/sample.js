// 人間の手
var janken = "グー";
document.write('<p>あなたは' + janken + '</p>');
// 人間の手をチェック
switch (janken) {
    case "グー":
        document.write('<p>私は、パー。</p>');
        break;
    case "チョキ":
        document.write('<p>私は、グー。</p>');
        break;
    case "パー":
        document.write('<p>私は、チョキ。</p>');
        break;
    default:
        document.write('<p>……なんだって？？</p>');
}