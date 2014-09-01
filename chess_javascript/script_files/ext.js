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
//alert("hello");
document.getElementById("11").innerHTML=rook_black;
document.getElementById("11").setAttribute("onclick","myglobal(this)");
document.getElementById("11").style.cursor = "pointer";

document.getElementById("12").innerHTML=knight_black;
document.getElementById("12").setAttribute("onclick","myglobal(this)");
document.getElementById("12").style.cursor = "pointer";

document.getElementById("13").innerHTML=bishop_black;
document.getElementById("13").setAttribute("onclick","myglobal(this)");
document.getElementById("13").style.cursor = "pointer";

document.getElementById("14").innerHTML=queen_black;
document.getElementById("14").setAttribute("onclick","myglobal(this)");
document.getElementById("14").style.cursor = "pointer";

document.getElementById("15").innerHTML=king_black;
document.getElementById("15").setAttribute("onclick","myglobal(this)");
document.getElementById("15").style.cursor = "pointer";

document.getElementById("16").innerHTML=bishop_black;
document.getElementById("16").setAttribute("onclick","myglobal(this)");
document.getElementById("16").style.cursor = "pointer";

document.getElementById("17").innerHTML=knight_black;
document.getElementById("17").setAttribute("onclick","myglobal(this)");
document.getElementById("17").style.cursor = "pointer";

document.getElementById("18").innerHTML=rook_black;
document.getElementById("18").setAttribute("onclick","myglobal(this)");
document.getElementById("18").style.cursor = "pointer";


for(i=1;i<=8;i++)
{
document.getElementById("2"+i).innerHTML=pawn_black;
document.getElementById("2"+i).setAttribute("onclick","myglobal(this)");
document.getElementById("2"+i).style.cursor = "pointer";

}


document.getElementById("81").innerHTML=rook_white;
document.getElementById("81").setAttribute("onclick","myglobal(this)");
document.getElementById("81").style.cursor = "pointer";

document.getElementById("82").innerHTML=knight_white;
document.getElementById("82").setAttribute("onclick","myglobal(this)");
document.getElementById("82").style.cursor = "pointer";

document.getElementById("83").innerHTML=bishop_white;
document.getElementById("83").setAttribute("onclick","myglobal(this)");
document.getElementById("83").style.cursor = "pointer";

document.getElementById("84").innerHTML=queen_white;
document.getElementById("84").setAttribute("onclick","myglobal(this)");
document.getElementById("84").style.cursor = "pointer";

document.getElementById("85").innerHTML=king_white;
document.getElementById("85").setAttribute("onclick","myglobal(this)");
document.getElementById("85").style.cursor = "pointer";

document.getElementById("86").innerHTML=bishop_white;
document.getElementById("86").setAttribute("onclick","myglobal(this)");
document.getElementById("86").style.cursor = "pointer";

document.getElementById("87").innerHTML=knight_white;
document.getElementById("87").setAttribute("onclick","myglobal(this)");
document.getElementById("87").style.cursor = "pointer";

document.getElementById("88").innerHTML=rook_white;
document.getElementById("88").setAttribute("onclick","myglobal(this)");
document.getElementById("88").style.cursor = "pointer";


for(i=1;i<=8;i++)
{
document.getElementById("7"+i).innerHTML=pawn_white;
document.getElementById("7"+i).setAttribute("onclick","myglobal(this)");
document.getElementById("7"+i).style.cursor = "pointer";
}


document.getElementById("44").innerHTML=king_white;
document.getElementById("44").setAttribute("onclick","myglobal(this)");
document.getElementById("44").style.cursor = "pointer";


document.getElementById("32").innerHTML=bishop_white;
 


}


var arr = ["44-24","21-41","23-32","75-65","65-55","27-37"];

var replay = function(f) {
	alert("in replay");
  // var s = document.getElementById("div1"); //you could pass this element as a parameter as well
   f = f || 0;
   if(f < arr.length) {
      str2=""+arr[f];
alert("in main loop");
		var res1 = str2.substring(0,2);
		var res2 = str2.substring(3,5);

			var xyx=document.getElementById(res1).innerHTML;
			document.getElementById(res2).innerHTML=xyx;
			document.getElementById(res1).innerHTML="";

      f++;
      if(f==arr.length)
         alert("over");
      //create a pause of 2 seconds.
      setTimeout(function() { replay(f) }, 2000);          
   }
}



function myglobal(obj)
{
//alert("global");
divid=obj.id;
//alert(divid);
var divx=parseInt(divid.charAt(0));
var divy=parseInt(divid.charAt(1));

var tds=document.getElementById(divid).firstChild.name;
//alert(tds);
////alert("in global");
myMove(tds,divx,divy);
//alert("okay");
}

function myput(obj)
{
	////alert("hello");
	var target_divid=obj.id;
	////alert(target_divid);
	var divx=parseInt(target_divid.charAt(0));
	var divy=parseInt(target_divid.charAt(1));
	
		document.getElementById(target_divid).innerHTML=document.getElementById(divid).innerHTML;
		document.getElementById(divid).innerHTML="";
		//document.getElementById(divid).setAttribute();
		//document.getElementById(target_divid).setAttribute("onclick","myglobal(this)");
		var tempID="";
		for(i=1;i<=8;i++)
		{
			for(j=1;j<=8;j++)
				{
					tempID=""+i+j;
				document.getElementById(tempID).removeAttribute("style");
				document.getElementById(tempID).removeAttribute("onclick");	
				if(!isEmpty(i,j))
				{
				document.getElementById(tempID).setAttribute("onclick","myglobal(this)");
				}
				
		}

		}


}

function myMove(tds,divx,divy)
{
	//alert("in myMove");
	if(tds=="rw"|tds=="rb")
	{
		//alert("in if");
		rmoves(divx,divy,tds);
	}
		//for bishop
if(tds=="bw"|tds=="bb")
{
////alert("in if");
bmoves(divx,divy,tds);
}
//for queen
	if(tds=="qw"|tds=="qb")
	{
		////alert("in if");
		rmoves(divx,divy,tds);
		bmoves(divx,divy,tds);
	}
	//for knight
	if(tds=="hw"|tds=="hb")
	{
		//alert("in hmoves");
		hmoves(divx,divy,tds);
	}
	//for pawn
	if(tds=="pb")
	{
		//alert("in pmoves");
		pbmoves(divx,divy,tds);
	}
	if(tds=="pw")
	{
		//alert("in pmoves");
		pwmoves(divx,divy,tds);
	}
	if(tds=="kw" | tds=="kb")
	{
		//alert("in kmoves");
		kmoves(divx,divy,tds);
	}
}

function pbmoves(divx,divy,tds)
{
if(divx=="2")
{
	if(isEmpty(divx+1,divy))
	{
	highlight(divx+1,divy);
    }
    
    if((isEmpty(divx+2,divy))&&(isEmpty(divx+1,divy)))
    {
	highlight(divx+2,divy);
    }
   }  
  else
  {
  	if(isEmpty(divx+1,divy))
  	{
  		highlight(divx+1,divy);
  	}
  }
  if(((divx+1)>0)&&((divx+1)<=8)&&((divy-1)>0)&&((divy-1)<=8))
  {
  if(!(isEmpty(divx+1,divy-1)) && (!isFriend(divx+1,divy-1,tds)))
  {
  	highlight(divx+1,divy-1);
  }
}
   if(((divx+1)>0)&&((divx+1)<=8)&&((divy+1)>0)&&((divy+1)<=8))
   {
   if(!(isEmpty(divx+1,divy+1)) && (!isFriend(divx+1,divy+1,tds)))
  {
  	highlight(divx+1,divy+1);
  }
}
}
//for pawns white
function pwmoves(divx,divy,tds)
{
if(divx=="7")
{
	if(isEmpty(divx-1,divy))
	{
	highlight(divx-1,divy);
    }
    
    if((isEmpty(divx-2,divy))&&(isEmpty(divx-1,divy)))
    {
	highlight(divx-2,divy);
    }
   }  
  else
  {
  	if(isEmpty(divx-1,divy))
  	{
  		highlight(divx-1,divy);
  	}
  }
  if(((divx-1)>0)&&((divx-1)<=8)&&((divy-1)>0)&&((divy-1)<=8))
  {
  if(!(isEmpty(divx-1,divy-1)) && (!isFriend(divx-1,divy-1,tds)))
  {
  	highlight(divx-1,divy-1);
  }
}
   if(((divx-1)>0)&&((divx-1)<=8)&&((divy+1)>0)&&((divy+1)<=8))
   {
   if(!(isEmpty(divx-1,divy+1)) && (!isFriend(divx-1,divy+1,tds)))
  {
  	highlight(divx-1,divy+1);
  }
}
}


function rmoves(divx, divy,tds)
{
	////alert("in rmoves");
	//for horizontal right
	for(i=(divy+1);i<=8;i++)
	{
		////alert("in for");
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
		////alert("in reverse for");
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

	for(i=(divx+1);i<=8;i++)
	{
		////alert("in for");
		if(isEmpty(i,divy))
		{
			highlight(i,divy);
		}
		else
		{
			if(isFriend(i,divy,tds))
			{
				break;
			}
			else
			{
				highlight(i,divy);
				break;
			}
		}
	}

	for(i=(divx-1);i>0;i--)
	{
		////alert("in for");
		if(isEmpty(i,divy))
		{
			highlight(i,divy);
		}
		else
		{
			if(isFriend(i,divy,tds))
			{
				break;
			}
			else
			{
				highlight(i,divy);
				break;
			}
		}
	}


	
}
//for bishop 
function bmoves(divx, divy,tds)
{
////alert("in rmoves");
for(i=(divx+1),j=(divy+1);i<=8 && j<=8;i++,j++)
{
//alert(i);
//alert(j);
if(isEmpty(i,j))
{
highlight(i,j);
}
else
{
if(isFriend(i,j,tds))
{
break;
}
else
{
highlight(i,j); 
break;
}
}
}
for(i=(divx-1),j=(divy-1);i>0 && j>0;i--,j--)
{
////alert("in for");
//alert(i);
//alert(j);

if(isEmpty(i,j))
{
highlight(i,j);
}
else
{
if(isFriend(i,j,tds))
{
break;
}
else
{
highlight(i,j);
break;
}
}
}
//for vertical
//alert("in 3rd for");
for(k=(divx+1),l=(divy-1);k<=8 && l>0;k++,l--)
	{
		//alert(k);
//alert(l);

		////alert("in for");
		if(isEmpty(k,l))
		{
			highlight(k,l);
		}
		else
		{
			if(isFriend(k,l,tds))
			{
				break;
			}
			else
			{
				highlight(k,l);
				break;
			}
		}
	}
//alert("in 4th for");
	for(i=(divx-1),j=(divy+1);i>0 && j<=8;i--,j++)
	{
		////alert("in for");
		//alert(i);
//alert(j);

		if(isEmpty(i,j))
		{
			highlight(i,j);
		}
		else
		{
			if(isFriend(i,j,tds))
			{
				break;
			}
			else
			{
				highlight(i,j);
				break;
			}
		}
	}
}
	//for knight
function hmoves(divx, divy,tds)
{
	//alert("in hmove");
	if(((divx-2)>0)&&((divx-2)<=8)&&((divy+1)>0)&&((divy+1)<=8))
	{
		if(isEmpty(divx-2,divy+1))
		{
			highlight(divx-2,divy+1);
		}
		else if(!isFriend(divx-2,divy+1,tds))
		{
highlight(divx-2,divy+1);
        }
    }	
    if(((divx-1)>0)&&((divx-1)<=8)&&((divy+2)>0)&&((divy+2)<=8))
    {
    	if(isEmpty(divx-1,divy+2))
		{
			highlight(divx-1,divy+2);
		}
		else if(!isFriend(divx-1,divy+2,tds))
		{
highlight(divx-1,divy+2);
        }

    }
    if(((divx+1)>0)&&((divx+1)<=8)&&((divy+2)>0)&&((divy+2)<=8))
    {
    	if(isEmpty(divx+1,divy+2))
		{
			highlight(divx+1,divy+2);
		}
		else if(!isFriend(divx+1,divy+2,tds))
		{
highlight(divx+1,divy+2);
        }

    }
    if(((divx+2)>0)&&((divx+2)<=8)&&((divy+1)>0)&&((divy+1)<=8))
    {
    	if(isEmpty(divx+2,divy+1))
		{
			highlight(divx+2,divy+1);
		}
		else if(!isFriend(divx+2,divy+1,tds))
		{
highlight(divx+2,divy+1);
        }

    }
    if(((divx+2)>0)&&((divx+2)<=8)&&((divy-1)>0)&&((divy-1)<=8))
    {
    	if(isEmpty(divx+2,divy-1))
		{
			highlight(divx+2,divy-1);
		}
		else if(!isFriend(divx+2,divy-1,tds))
		{
highlight(divx+2,divy-1);
        }

    }
    if(((divx+1)>0)&&((divx+1)<=8)&&((divy-2)>0)&&((divy-2)<=8))
    {
    	if(isEmpty(divx+1,divy-2))
		{
			highlight(divx+1,divy-2);
		}
		else if(!isFriend(divx+1,divy-2,tds))
		{
highlight(divx+1,divy-2);
        }

    }
    if(((divx-1)>0)&&((divx-1)<=8)&&((divy-2)>0)&&((divy-2)<=8))
    {
    	if(isEmpty(divx-1,divy-2))
		{
			highlight(divx-1,divy-2);
		}
		else if(!isFriend(divx-1,divy-2,tds))
		{
highlight(divx-1,divy-2);
        }

    }
    if(((divx-2)>0)&&((divx-2)<=8)&&((divy-1)>0)&&((divy-1)<=8))
    {
    	if(isEmpty(divx-2,divy-1))
		{
			highlight(divx-2,divy-1);
		}
		else if(!isFriend(divx-2,divy-1,tds))
		{
highlight(divx-2,divy-1);
        }

    }
}

function kmoves(divx,divy,tds)
{
	//alert("in kmoves");
	for(i=divx-1;i<=divx+1;i++)
	{
		for(j=divy-1;j<=divy+1;j++)
		{
			if(i==divx && j==divy)
				continue;
			else
			{
				if(i==0 | j==0 |i==9|j==9)
				{
					//alert("i=0 or j=0");
					continue;
				}
				else
				{
					if(isEmpty(i,j))
					{
						//alert("i,j is empty");
						highlight(i,j);
					}
					else
						if(!isFriend(i,j,tds))
						{
							//alert("i,j is enemy");
						highlight(i,j);
						
						}
				}
			}


				//highlight(i,j);
		}
	}
}

function isEmpty (divx,i)
{
	////alert("in isempty");
	var divstr=""+divx+i;
	var imgvar=document.getElementById(divstr).getElementsByTagName("img")[0];
	////alert(imgvar);
	if(imgvar)
	{
		////alert("imgvar has some value");
		return false;
	}
	else
	{
		////alert("imgvar has no value");
			return true;
	}
		
}

function isFriend(divx,i,tds)
{
	var divstr=""+divx+i;
	var coin_name=document.getElementById(divstr).getElementsByTagName("img")[0].name;
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
	////alert("in high");
	var divstr=""+divx+i;
	document.getElementById(divstr).setAttribute("style","border:2px solid red;");
	document.getElementById(divstr).setAttribute("onclick","myput(this)");
}


