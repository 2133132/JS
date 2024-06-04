//基本資料型態 & 變數

//字串
"酷東西的超酷東西超酷"

//數字
123
321.568

//布林值
true
false

//變數
//變數名稱只能是 英文大小寫 or 數字 or $ or _ 的組合
//變數名稱開頭不能是數字
var my_name='酷東西'
document.write("我是"+my_name);
document.write("<br/>");
document.write("<hr/>");
document.write(my_name+"今年165156651歲");
document.write("<br/>");
document.write(my_name+"很帥");
document.write("<br/>");
document.write("<br/>");

//0~10的隨機數
document.write(Math.round(Math.random()*10));
document.write("<br/>");
document.write("<br/>");
//超簡易計算機
/*
var num1 = prompt("請輸入數字1");
var num2 = prompt("請輸入數字2");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
document.write(num1+num2);
document.write("<br/>");
document.write("<br/>");
*/

//函式
function hello(name,age){
    document.write("你好"+name+"你今年"+age+"歲");
}

hello("酷東西",654351);
document.write("<br/>");
document.write("<br/>");

//while迴圈應用 密碼驗證系統
window.open(""._self);
var password="123321";
var input;
var entry_count=0;
var entry_limit=3;
var entry_of_limit=false;
while(input!=password && !entry_of_limit){
    entry_count++;
    if(entry_count<=entry_limit){
        input=prompt("請輸入密碼，只能輸入三次，密碼=123321");
    }
    else{
        entry_of_limit=true;
        
    }

}
if(entry_of_limit){
    alert("超出輸入次數，登入失敗，將關閉此網頁");
    window.close();
    
}
else{alert("登入成功");}


//for迴圈應用 問答
/*
var question=[
    {},
    {
        prompt:"2^10=?\n(A)20\n(B)2048\n(C)1024\n(D)10",
        answer:"C"
    },
    {
        prompt:"X^2+2X+1=0 X=?\n(A)1\n(B)-1\n(C)0\n(D)-0",
        answer:"B"
    },
    {
        prompt:"在空間中,aX+bY+cZ=5 代表?\n(A)平面\n(B)直線\n(C)三角錐\n(D)正方體",
        answer:"A"
    }
];

var score=0;
var A;
for(var i=1;i<question.length;i++){
    A=prompt('第'+i+'題:\n'+question[i].prompt);
    if(A==question[i].answer){alert("你答對了");score++}
    else{alert("你答錯了")};
}

alert("你答對"+score+'題');
*/

//2維陣列、巢狀迴圈

var number=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
];

for(var i=0;i<number.length;i++){
    for(var j=0;j<number[i].length;j++){
        document.write(number[i][j]);
    }
    document.write("<br/>");
};
document.write("<br/>");
document.write("<br/>");

//class
class Phone{
    constructor(number, year, is_waterproof){
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof

    }
    phone_age(){
        return 2024-this.year;    }

}

var phone1 = new Phone("123",2020,true);
var phone2 = new Phone("456",2018,false);
var phone3 = new Phone("789",2023,true);

document.write(phone1.phone_age());
document.write("<br/>");
document.write("<br/>");

//event lisrener
var img = document.getElementById('img');
img.addEventListener("mouseover",function(){
    this.src ="battle2.png";
})
img.addEventListener("mouseout",function(){
    this.src ="battle1.jpg";
})
