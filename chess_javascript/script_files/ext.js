rook_black="<img src='images/rook_black.png'>";
knight_black="<img src='images/knight_black.png'>";
bishop_black="<img src='images/bishop_black.png'>";
king_black="<img src='images/king_black.png'>";
queen_black="<img src='images/queen_black.png'>";
pawn_black="<img src='images/pawn_black.png'>";

rook_white="<img src='images/rook_white.png'>";
knight_white="<img src='images/knight_white.png'>";
bishop_white="<img src='images/bishop_white.png'>";
king_white="<img src='images/king_white.png'>";
queen_white="<img src='images/queen_white.png'>";
pawn_white="<img src='images/pawn_white.png'>";



function abc()
{
alert("hello");
document.getElementById("11").innerHTML=rook_black;
document.getElementById("12").innerHTML=knight_black;
document.getElementById("13").innerHTML=bishop_black;
document.getElementById("14").innerHTML=queen_black;
document.getElementById("15").innerHTML=king_black;
document.getElementById("16").innerHTML=bishop_black;
document.getElementById("17").innerHTML=knight_black;
document.getElementById("18").innerHTML=rook_black;

for(i=1;i<=8;i++)
{
document.getElementById("2"+i).innerHTML=pawn_black;
}


document.getElementById("81").innerHTML=rook_white;
document.getElementById("82").innerHTML=knight_white;
document.getElementById("83").innerHTML=bishop_white;
document.getElementById("84").innerHTML=queen_white;
document.getElementById("85").innerHTML=king_white;
document.getElementById("86").innerHTML=bishop_white
document.getElementById("87").innerHTML=knight_white;
document.getElementById("88").innerHTML=rook_white;

for(i=1;i<=8;i++)
{
document.getElementById("7"+i).innerHTML=pawn_white;
}
}