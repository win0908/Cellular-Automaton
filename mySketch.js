
var scl = 10;
var f = 50;
var num = 3;

var G = [];
var NG = [];

var SET = [];

var t = 0;

function setup() {
	createCanvas( windowWidth, windowHeight);
	background(255);
	
	frameRate(10);
	
	//random 1st line
	var i = 0;
	for(var x = f; x<=width-f; x+=scl){
		G[i] = round(random(num));
		i++;
	}
	
	
	//random rule set
	var n = num+1;
	for(var j = 0; j<(n*n*n); j++){
		SET[j] = round(random(num));
	}
	
	
}


function draw() {
	background(255);
	rectMode(CENTER);
	
	noStroke();		
	fill(0);
	
	for(var y = f; y<=height-f; y+=scl){
		drawG(y);
	}
	
	
	
	t+=1;
	if(t%25 == 0){
		var i = 0;
		for(var x = f; x<=width-f; x+=scl){
			G[i] = round(random(num));
			i++;
		}
		
		var n = num+1;
		for(var j = 0; j<(n*n*n); j++){
			SET[j] = round(random(num));
		}
	}
	
	
	//noLoop();
}


function drawG( y){
	var i = 0;
	for(var x = f; x<=width-f; x+=scl){
		
		noStroke();
		fill(0);
		
		if(G[i] == 0){
			//ellipse( x, y, scl/1.5);	
			rect( x, y, scl/2, scl);	
		}
		
		if(G[i] == 1){
			rect( x, y, scl, scl/2);	
		}
		
		if(G[i] == 2){
			noFill();
			stroke(0);
			strokeWeight(3);
			//ellipse( x, y, scl);	
		}
		
		if(G[i] == 3){
			rect( x, y, scl);	
		}
		
		
		i+=1;
	}
	
	getNewG(G);
	G = NG;
	
}


function getNewG( _g){
	
	for(var j = 0; j<width/scl; j++){
		var a = _g[j-1];
		var b = _g[ j ];
		var c = _g[j+1];
		
		NG[j] = ruleset(a,b,c);
		
	}
}


function ruleset(a,b,c){
	// a = left, b = middle, c = right
	//111	110	101	100	011	010	001	000
	// 1	 0	 0	 1	 0	 1	 1	 0
	
	if( a == undefined) a = 0;
	if( c == undefined) c = 0;
	
	// 000 --> 111
	if( a == 1 && b == 1 && c == 1) return SET[0]
	if( a == 1 && b == 1 && c == 0) return SET[1]
	if( a == 1 && b == 0 && c == 1) return SET[2]
	if( a == 1 && b == 0 && c == 0) return SET[3]
	if( a == 0 && b == 1 && c == 1) return SET[4]
	if( a == 0 && b == 1 && c == 0) return SET[5]
	if( a == 0 && b == 0 && c == 1) return SET[6]
	if( a == 0 && b == 0 && c == 0) return SET[7]
	
	//---------------------------//
	// 0 & 2
	if( a == 2 && b == 2 && c == 2) return SET[8]
	if( a == 2 && b == 2 && c == 0) return SET[9]
	if( a == 2 && b == 0 && c == 2) return SET[10]
	if( a == 2 && b == 0 && c == 0) return SET[11]
	if( a == 0 && b == 2 && c == 2) return SET[12]
	if( a == 0 && b == 2 && c == 0) return SET[13]
	if( a == 0 && b == 0 && c == 2) return SET[14]
	
	// 1 & 2
	if( a == 2 && b == 2 && c == 1) return SET[15]
	if( a == 2 && b == 1 && c == 2) return SET[16]
	if( a == 2 && b == 1 && c == 1) return SET[17]
	if( a == 1 && b == 2 && c == 2) return SET[18]
	if( a == 1 && b == 2 && c == 1) return SET[19]
	if( a == 1 && b == 1 && c == 2) return SET[20]
	
	// 0 & 1 & 2
	if( a == 0 && b == 2 && c == 1) return SET[21]
	if( a == 2 && b == 0 && c == 1) return SET[22]
	if( a == 2 && b == 1 && c == 0) return SET[23]
	if( a == 1 && b == 0 && c == 2) return SET[24]
	if( a == 1 && b == 2 && c == 0) return SET[25]
	if( a == 0 && b == 1 && c == 2) return SET[26]
	
	//-------------------------//
	// 0 & 3
	if( a == 3 && b == 3 && c == 3) return SET[27]
	if( a == 3 && b == 3 && c == 0) return SET[28]
	if( a == 3 && b == 0 && c == 3) return SET[29]
	if( a == 3 && b == 0 && c == 0) return SET[30]
	if( a == 0 && b == 3 && c == 3) return SET[31]
	if( a == 0 && b == 3 && c == 0) return SET[32]
	if( a == 0 && b == 0 && c == 3) return SET[33]
	
	// 1 & 3
	if( a == 3 && b == 3 && c == 1) return SET[34]
	if( a == 3 && b == 1 && c == 3) return SET[35]
	if( a == 3 && b == 1 && c == 1) return SET[36]
	if( a == 1 && b == 3 && c == 3) return SET[37]
	if( a == 1 && b == 3 && c == 1) return SET[38]
	if( a == 1 && b == 1 && c == 3) return SET[39]
	
	// 2 & 3
	if( a == 3 && b == 3 && c == 2) return SET[40]
	if( a == 3 && b == 2 && c == 3) return SET[41]
	if( a == 3 && b == 2 && c == 2) return SET[42]
	if( a == 2 && b == 3 && c == 3) return SET[43]
	if( a == 2 && b == 3 && c == 2) return SET[44]
	if( a == 2 && b == 2 && c == 3) return SET[45]
	
	// 0 & 1 & 3
	if( a == 0 && b == 3 && c == 1) return SET[46]
	if( a == 3 && b == 0 && c == 1) return SET[47]
	if( a == 3 && b == 1 && c == 0) return SET[48]
	if( a == 1 && b == 0 && c == 3) return SET[49]
	if( a == 1 && b == 3 && c == 0) return SET[50]
	if( a == 0 && b == 1 && c == 3) return SET[51]
	
	// 0 & 2 & 3
	if( a == 0 && b == 3 && c == 2) return SET[52]
	if( a == 3 && b == 0 && c == 2) return SET[53]
	if( a == 3 && b == 2 && c == 0) return SET[54]
	if( a == 2 && b == 0 && c == 3) return SET[55]
	if( a == 2 && b == 3 && c == 0) return SET[56]
	if( a == 0 && b == 2 && c == 3) return SET[57]
	
	// 1 & 2 & 3
	if( a == 2 && b == 3 && c == 1) return SET[58]
	if( a == 3 && b == 2 && c == 1) return SET[59]
	if( a == 3 && b == 1 && c == 2) return SET[60]
	if( a == 1 && b == 2 && c == 3) return SET[61]
	if( a == 1 && b == 3 && c == 2) return SET[62]
	if( a == 2 && b == 1 && c == 3) return SET[63]
	
	
}













