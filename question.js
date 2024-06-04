//for迴圈應用 問答
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
