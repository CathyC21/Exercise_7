/*
	
	Using an open API, parse the json or XML data to pull out various
 	bits of information.
	Then visualize this information on the screen in some way.

	OpenWeatherMap is another API that does not require API keys:
	http://openweathermap.org/API

	A few others are listed at the bottom of this link:
	https://github.com/processing/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON

	See Chapter 18 in LP AND reference Chapter 12 in Make: Getting Started with P5.js

	This is due on November 10th and is worth 2 Exercises
*/



//https://data.cityofnewyork.us/resource/xx67-kt59.json?$limit=1000
var ratsUrl = 'https://data.cityofnewyork.us/resource/xx67-kt59.json?$limit=1000'; 
var brooklyn = [];




function preload(){
	getRats();
}

function setup(){
	createCanvas(700,700);
	//create array of brooklyn data
	for(var i = 0; i < rats.length; i++)
	{
		if(rats[i] == "BROOKLYN"){

			brooklyn.push(rats);
		}
	}
}

function draw(){
	background(0);
	//board();
	fill(0,255,0);
	text("BROOKLYN", width/2, 50);
	console.log(brooklyn.boro);


	score(color(13,24,52), 1,100);




}


// this is gonna grab the NYC open data stuff
function getRats(){

	 // this will download the city open data on the health violations:
  rats = loadJSON(ratsUrl, ratsDownloaded); // asynchronous API call

}

function ratsDownloaded(){
	// this will run once the city open data is grabbed
	console.log(rats.length); // how many records?
}
/*
function board(){
	stroke(0);
	rectMODE(CENTER);
	rect(width/2, height/2,40,80);

}
*/

function score(c, num, hei){
	if(brooklyn.score ==  num){

		for(var d = 0; d < brooklyn.length; d++){
			fill(c);
			rect(d, 100, 30,30); //hopefully this goes as a straight line

		}
}
}