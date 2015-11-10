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
//var co = color(143,243,52);



function preload(){
	getRats();
}

function setup(){
	createCanvas(700,700);
	//create array of brooklyn data
	/*
	for(var i = 0; i < rats.length; i++)
	{
		if(rats[i].boro == "BROOKLYN"){

			brooklyn.push(rats[i]);
		}
	}
	*/
}

function draw(){
	background(255);
	board();
	stroke(0);
	fill(0,255,0);
	text("100,110", 100, 110);
	text(rats.boro, 200,200);
	score();
	//console.log(brooklyn.length); //checked brooklyn array length to see if it's correct
	//console.log("hello");

	//score(, 1,100);




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

function board(){
	//board
	stroke(0);
	fill(115,80,58);
	rect(20, 20,500,650);
	//paper
	fill(255,255,255);
	rect(45,40, 450,600);
	//clip
	strokeWeight(3);
	fill(86,67,85)
	rect(210,20,120,50);


}
/*
function score(){

	if(brooklyn.score == "7"){

		fill(34,21,90);
		rect(400,320,20,20);

	}

}
for(var i = 0; i < rats.length; i++){
	if(rats.boro == "BROOKLYN"){
		fill(24,124,12);
		rect(300,200,30,30);
	}}
*/





/*
function score(){

	//var num = brooklyn.get
	

		for(var x = 0; x < rats.length; x++){
			for(var y = 0; y <= rats.length; y ++){

				if(rats.boro ==  "MANHATTAN"){
			
				stroke(40,134,123);
				line(random(450),random(600),20,20); //hopefully this goes as a straight lin


		

		}
}
}}
*/

