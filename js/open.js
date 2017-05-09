var str = prompt("กรุณาพิมพ์ชื่อของคุณเพื่อเข้าชมเว็บไซต์ครับ ", "")
<!--
function scrollmsg(seed)
{
var m1 = ("สวัสดีครับคุณ "+ str+" ขณะนี้คุณอยู่ที่ Pairote.surge.sh ครับ"); 
var m2 = " ยินดีต้อนรับทุกท่าน";
var m3 = " สู่เว็บไซต์ที่รวบรวมทุกข้อมูลของ BATMAN";
var m4 = " ขอบคุณที่เข้ามาเยี่มชมครับ";
var msg=m1+m2+m3+m4;
var out = "";
var c = 0;
if (seed > 100) {
seed--;
var cmd="scrollmsg(" + seed + ")";
timerTwo=window.setTimeout(cmd,110);
}
else if (seed <= 100 && seed > 0) {
for (c=0 ; c < seed ; c++) {
out+=" ";
}
out+=msg;
seed--;
var cmd="scrollmsg(" + seed + ")";
document.display.box.value=out;
timerTwo=window.setTimeout(cmd,110);
}
else if (seed <= 0) {
if (-seed < msg.length) {
out+=msg.substring(-seed,msg.length);
seed--;
var cmd="scrollmsg(" + seed + ")";
document.display.box.value=out;
timerTwo=window.setTimeout(cmd,110);
}
else {
document.display.box.value=" ";
timerTwo=window.setTimeout("scrollmsg(15)",110);
}
}
}
// -->
timerONE=window.setTimeout('scrollmsg(15)',500)