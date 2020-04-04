
beforestrfun();
$('#tohide').hide();
$('#startbtn').hide();

function beforestrfun(){
$("#keyboard").hide();
$('#ontyping').attr('id','tohide');
$('#forstart').show();
}
function onstartfun(){
	$("#forstart").hide();
	$("#keyboard").show();
	$("#shower").show();
	$("#changer").show();
	myfun();
	$('#tohide').show();
	$("#tohide").attr('id','ontyping');
	$('#clock').show();
	playtone(1);
}

function gennum(){
	var end=$("#en").val();
	return Math.floor(Math.random()*end)+1;
}
var r=0;
var tru=0;
var tot=0;

	$("#changer").keyup(function tst(eve){
	var str1 = $("#shower").val();
	var str2 = $(this).val();
	
	
	
	if(str1==str2){
		var setid1=$("#shower").val()+'id';
			if(setid1=='[id' || setid1=='{id'){setid1='cha1id'}
			if(setid1==']id' || setid1=='}id'){setid1='cha2id'}
			if(setid1==';id' || setid1==':id'){setid1='cha3id'}
			if(setid1=='"id' || setid1=="'id"){setid1='cha4id'}
			if(setid1==',id' || setid1=='<id'){setid1='cha5id'}
			if(setid1=='.id' || setid1=='>id'){setid1='cha6id'}
			if(setid1=='/id' || setid1=='?id'){setid1='cha7id'}

		var setid2=setid1.toLowerCase();
		document.getElementById(setid2).style.color="black";
		document.getElementById(setid2).style.fontSize="16px";
		$(this).val("");
		findtxt(gennum());
		var setid3=$("#shower").val()+'id';

		if(setid3=='[id' || setid3=='{id'){setid3='cha1id'}
		if(setid3==']id' || setid3=='}id'){setid3='cha2id'}
		if(setid3==';id' || setid3==':id'){setid3='cha3id'}
		if(setid3=='"id' || setid3=="'id"){setid3='cha4id'}
		if(setid3==',id' || setid3=='<id'){setid3='cha5id'}
		if(setid3=='.id' || setid3=='>id'){setid3='cha6id'}
		if(setid3=='/id' || setid3=='?id'){setid3='cha7id'}
		
		var setid4=setid3.toLowerCase();
		document.getElementById(setid4).style.color="red";
		document.getElementById(setid4).style.fontSize="25px";
		tru++;
		playtone(2);
	}else if(eve.keyCode !=16){
		$(this).val("");		
		playtone(3);
	}
	
if(eve.keyCode !=16){
	tot++;
$("#total").val("Total     :   "+tot);
r = tot - tru ;
$("#badd").val("Wrong  :   "+r);
tru = tot - r ;
$("#nicee").val("Right    :   "+tru);
if(tot==150){
    
    if  ($("#en").val()==26){
        if  (r<=6 && ((clockh * 3600 ) + (clockm * 60) + clocks ) <= 181){
            
            playtone(6);
        $('#startbtn').show();
		$('#time').val('Time     :   '+$('#clock').val());
		beforestrfun();
        }else  {
            playtone(4);
	$('#startbtn').show();
	$('#time').val('Time     :   '+$('#clock').val());
	beforestrfun();
        }
        
    }
    
    if  ($("#en").val()>26){
        if  (r<=6 && ((clockh * 3600 ) + (clockm * 60) + clocks ) <= 201){
            playtone(6);
        $('#startbtn').show();
		$('#time').val('Time     :   '+$('#clock').val());
		beforestrfun();
            
        }else  {
            playtone(4);
	$('#startbtn').show();
	$('#time').val('Time     :   '+$('#clock').val());
	beforestrfun();
        }
    }
	
	
}}
	
});

function findtxt(txt){
	
	switch (txt){
	case 1:
		$("#shower").val('a');
		break;
	case 2:
		$("#shower").val('b');
		break;
	case 3:
		$("#shower").val('c');
		break;
	case 4:
		$("#shower").val('d');
		break;
	case 5:
		$("#shower").val('e');
		break;
	case 6:
		$("#shower").val('f');
		break;
	case 7:
		$("#shower").val('g');
		break;
	case 8:
		$("#shower").val('h');
		break;
	case 9:
		$("#shower").val('i');
		break;
	case 10:
		$("#shower").val('j');
		break;
	case 11:
		$("#shower").val('k');
		break;
	case 12:
		$("#shower").val('l');
		break;
	case 13:
		$("#shower").val('m');
		break;
	case 14:
		$("#shower").val('n');
		break;
	case 15:
		$("#shower").val('o');
		break;
	case 16:
		$("#shower").val('p');
		break;
	case 17:
		$("#shower").val('q');
		break;
	case 18:
		$("#shower").val('r');
		break;
	case 19:
		$("#shower").val('s');
		break;
	case 20:
		$("#shower").val('t');
		break;
	case 21:
		$("#shower").val('u');
		break;
	case 22:
		$("#shower").val('v');
		break;
	case 23:
		$("#shower").val('w');
		break;
	case 24:
		$("#shower").val('x');
		break;
	case 25:
		$("#shower").val('y');
		break;
	case 26:
		$("#shower").val('z');
		break;
	case 27:
		$("#shower").val('A');
		break;
	case 28:
		$("#shower").val('B');
		break;
	case 29:
		$("#shower").val('C');
		break;
	case 30:
		$("#shower").val('D');
		break;
	case 31:
		$("#shower").val('E');
		break;
	case 32:
		$("#shower").val('F');
		break;
	case 33:
		$("#shower").val('G');
		break;
	case 34:
		$("#shower").val('H');
		break;
	case 35:
		$("#shower").val('I');
		break;
	case 36:
		$("#shower").val('J');
		break;
	case 37:
		$("#shower").val('K');
		break;
	case 38:
		$("#shower").val('L');
		break;
	case 39:
		$("#shower").val('M');
		break;
	case 40:
		$("#shower").val('N');
		break;
	case 41:
		$("#shower").val('O');
		break;
	case 42:
		$("#shower").val('P');
		break;
	case 43:
		$("#shower").val('Q');
		break;
	case 44:
		$("#shower").val('R');
		break;
	case 45:
		$("#shower").val('S');
		break;
	case 46:
		$("#shower").val('T');
		break;
	case 47:
		$("#shower").val('U');
		break;
	case 48:
		$("#shower").val('V');
		break;
	case 49:
		$("#shower").val('W');
		break;
	case 50:
		$("#shower").val('X');
		break;
	case 51:
		$("#shower").val('Y');
		break;
	case 52:
		$("#shower").val('Z');
		break;
	case 53:
		$("#shower").val(';');
		break;
	case 54:
		$("#shower").val(':');
		break;
	case 55:
		$("#shower").val("'");
		break;
	case 56:
		$("#shower").val('[');
		break;
	case 57:
		$("#shower").val('{');
		break;
	case 58:
		$("#shower").val(']');
		break;
	case 59:
		$("#shower").val('}');
		break;
	case 60:
		$("#shower").val(',');
		break;
	case 61:
		$("#shower").val('<');
		break;
	case 62:
		$("#shower").val('.');
		break;
	case 63:
		$("#shower").val('>');
		break;
	case 64:
		$("#shower").val('/');
		break;
	case 65:
		$("#shower").val('?');
		break;
}}

function lev1(){
	playtone(5);
	setTimeout(function(){
	$("#en").val(26);
	onstartfun();},1000);
}

function lev2(){
	playtone(5);
	setTimeout(function(){
	$("#en").val(52);
	onstartfun();},1000);
}

function lev3(){
	playtone(5);
	setTimeout(function(){
	$("#en").val(65);
	onstartfun();},1000);
}

var clockh=0;
var clockm=0;
var clocks=0;
	function timmer(){
		
	var t=clockh+':'+clockm+':'+clocks;
		$("#clock").val(t);
	clocks++;
	if(clocks==60){
		clockm++;
		clocks=0;
	}
	if(clockm==60){
		clockh++;
		clockm=00
	}
	
	}
	function myfun(){
	
	setInterval(function(){timmer()},1000);
	}

	function playtone(num){
	var aw=document.createElement("audio");
	aw.setAttribute('src','bin/start.mp3');
	var ax=document.createElement("audio");
	ax.setAttribute('src','bin/true.mp3');
	var ay=document.createElement("audio");
	ay.setAttribute('src','bin/wrong.mp3');
	var az=document.createElement("audio");
	az.setAttribute('src','bin/loser.mp3');
	var ab=document.createElement("audio");
	ab.setAttribute('src','bin/btns.mp3');
	var winner=document.createElement("audio");
	winner.setAttribute('src','bin/winner.mp3');

	
	switch(num){
		
		case 1:
		aw.play();
		break;
		case 2:
		ax.play();
		break;
		case 3:
		ay.play();
		break;
		case 4:
		az.play();
		break;
		case 5:
		ab.play();
		break;
		case 6:
		winner.play();
		break;
		
	}
	
	}

function initial(){
	playtone(5);
	setTimeout(function(){location.reload();},1000);
	
}
