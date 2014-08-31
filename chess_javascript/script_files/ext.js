rook_black="<img src='images/rook_black.png' name=rb>";
knight_black="<img src='images/knight_black.png' name='hb'>";
bishop_black="<img src='images/bishop_black.png' name='bb'>";
king_black="<img src='images/king_black.png' name='kb'>";
queen_black="<img src='images/queen_black.png' name='qb'>";
pawn_black="<img src='images/pawn_black.png' name='pb'>";

rook_white="<img src='images/rook_white.png' name='rw'>";
knight_white="<img src='images/knight_white.png' name='hw'>";
bishop_white="<img src='images/bishop_white.png' name='bw'>";
king_white="<img src='images/king_white.png' name='kw'>";
queen_white="<img src='images/queen_white.png' name='qw'>";
pawn_white="<img src='images/pawn_white.png' name='pw'>";



function abc()
{
alert("hello");
document.getElementById("11").innerHTML=rook_black;
document.getElementById("11").setAttribute("onclick","myglobal(this)");
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

document.getElementById("44").innerHTML=rook_white;
 document.getElementById("44").style.cursor = "pointer";

}



function myglobal(obj)
{
alert("global");
var divid=obj.id;
alert(divid);
var divx=parseInt(divid.charAt(0));
var divy=parseInt(divid.charAt(1));

var tds=document.getElementById(divid).firstChild.name;
//alert(tds);
alert("in global");
myMove(tds,divx,divy);
alert("okay");
}

function myMove(tds,divx,divy)
{
	alert("in myMove");
	if(tds=="rw"|tds=="rb")
	{
		alert("in if");
		rmoves(divx,divy,tds);
	}

	



}

function rmoves(divx, divy,tds)
{
	alert("in rmoves");
	//for horizontal right
	for(i=(divy+1);i<=8;i++)
	{
		alert("in for");
		if(isEmpty(divx,i))
		{
			highlight(divx,i);
		}
		else
		{
			if(isFriend(divx,i,tds))
			{
				break;
			}
			else
			{
				highlight(divx,i);
				break;
			}
		}
	}

	//for horizontal left
	for(i=(divy-1);i>0;i--)
	{
		alert("in reverse for");
		if(isEmpty(divx,i))
		{

			highlight(divx,i);
		}
		else
		{
			if(isFriend(divx,i,tds))
			{
				break;
			}
			else
			{
				highlight(divx,i);
				break;
			}
		}
	}


	
}

function isEmpty (divx,i)
{
	alert("in isempty");
	var divstr=""+divx+i;
	var imgvar=document.getElementById(divstr).firstChild.name;
	alert(imgvar);
	if(imgvar)
	{
		alert("imgvar has some value");
		return false;
	}
	else
	{
		alert("imgvar has no value");
			return true;
	}
		
}

function isFriend(divx,i,tds)
{
	var divstr=""+divx+i;
	var coin_name=document.getElementById(divstr).firstChild.name;
	var color=tds.charAt(1);
	var comparing_color=coin_name.charAt(1);
	if(color==comparing_color)
	{
		return true;

	}
	else
	{
		return false;
	}


}
function highlight(divx,i)
{
	alert("in high");
	var divstr=""+divx+i;
	document.getElementById(divstr).setAttribute("style","border:2px solid red;");
}
