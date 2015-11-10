var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2de143494c0b295cca9337e1e96b00e0';
var weath;
var rain = [10];
var cloud;
//var value = 0;


function preload(){
	weath = loadJSON(url, gotData);

}


function gotData(data){
	println(data);
}
function setup(){
createCanvas(500,650);
//cloud = new Cloud();

// had the cloud move at the wind speed in the JSON file
cloud = {

	xpos:240,
	ypos: 500,
	xpos2: 220,
	ypos2: 450,
	speed: weath.wind.speed,

	display:function(){
		textFont('Georgia', 20);
		text('Wind Speed: ' + weath.wind.speed, this.xpos2, this.ypos2);
		fill(156,191,199);
		stroke(0);
		ellipse(this.xpos, this.ypos, 100,40);
		//ellipse(this.xpox2, this.ypos2, 50,30);
	},
	move: function(){
		this.xpos = this.xpos + this.speed; 
		if(this.xpos > width){
			this.xpos = 0;
		}//if
		this.xpos2 = this.xpos2 + this.speed;
		if(this.xpos2 > width){
			this.xpos2 = 0;
		}
	}//move


};
}

function draw(){
	board();
	stroke(0);
	fill(232,151,150);
	textFont('Georgia', 30);
	text("Today's weather report: ", 60,100);
	/*if(weather){
		fill(23,124,12);
		ellipse(100,100, weather.main.humidity, weather.main.humidity);
	}*/
	
	//calling the cloud function from setup
	cloud.move();
	cloud.display();
	texty();

	//name on top of the clipboard 
	//strokeWeight(0);
	fill(150,232,193);
	textFont('Georgia', 33);
	text(weath.name,194,50);
	//when mouse is pressed, it will have the rain fall and display the chance of rain 
	if(mouseIsPressed){
			for(var i = 0; i < rain.length; i++){
			rain[i] = new Rain();
			rain[i].display();
		}
		background(26,93,162,125);

		stroke(0);
		fill(46,72,217);
		textFont('Georgia',30);
		//var raining = String(weath.weather.description);
		text('LIGHT RAIN', 250, height/2);
	}
}


/*
function keyPressed(){
	if (key === LEFT_ARROW){
		var temper = (weather.main.temp - 273.150);
		var tempe = parseFloat(temper).toFixed(2);
		textFont('Georgia', 20);
		text("Temperature is: "+ tempe + " Celsius", 140,200 );
	}
	else if (key === RIGHT_ARROW){
		textFont('Georgia', 20);
		text('Humidity is: '+ weather.main.humidity + "%", 150,200);
		background(26,93,162,125);
	}
	return false;

}
*/
function board(){
	//board
	stroke(0);
	fill(115,80,58);
	rect(0, 0,width,height);
	//paper
	fill(255,255,255);
	rect(23,20, 450,600);
	//clip
	strokeWeight(3);
	fill(86,67,85)
	rect(190,0,120,60);
}
//rain class 
//used humidity as height of rain drops
function Rain(){
	this.c = color(60,194,255);
	this.xpos = random(20,520);
	this.ypos = random(20,670);


	this.display = function(){
		fill(this.c);
		stroke(0);

		ellipse(this.xpos, this.ypos, 30, weath.main.humidity);
		if (this.ypos < height){
				this.xpos = random(20,520);
				this.ypos = random(20,670);

		}
	}
}

function texty(){
	//fill();
	//temperature text
	var temper = (weath.main.temp - 273.150);
	var tempe = parseFloat(temper).toFixed(2);
	textFont('Georgia', 20);
	text("Temperature is: "+ tempe + " Celsius", 140,200 );
	//humidity text
	textFont('Georgia', 20);
	text('Humidity is: '+ weath.main.humidity + "%", 140,250);
	//rain text
	textFont('Georgia', 20);
	text('Rain: ', 140, 300);
	textFont('Georgia', 10);
	text('click here', 200,300);
}
/*

function Cloud(tempXpos,tempYpos){
	this.x = tempXpos;
	this.y = tempYpos; 
	this.speed = weather.wind.speed;

	this.display = function(){
		fill(124,123,21);
		stroke(0);
		ellipse(this.xpos, this.ypos, 40,10);
		ellipse(this.xpox, this.ypos, 30,10);
	}
	this.move = function(){
		this.xpos = this.xpos + this.speed; 
		if(this.xpos > 650){
			this.xpos = 0;
		}//if
	}//move
}//cloud
*/
