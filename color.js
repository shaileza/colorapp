var numsquares = 6;
var colors = generaterandomcolor(numsquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var changecolor = document.getElementById("changecolor");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");

easybtn.addEventListener("click", function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numsquares = 3;
	colors = generaterandomcolor(numsquares);
	pickedcolor = pickcolor();
	changecolor.textContent = pickedcolor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numsquares = 6;
	colors = generaterandomcolor(numsquares);
	pickedcolor = pickcolor();
	changecolor.textContent = pickedcolor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i]; 
		squares[i].style.display = "block";
	}
})

resetbutton.addEventListener("click", function(){
	 //generate all new colors:
	colors = generaterandomcolor(numsquares);
	//pick a new random color:
	pickedcolor = pickcolor();
	//change the span to match the given pciked color:
	changecolor.textContent = pickedcolor;
	messagedisplay.textContent = "";
	this.textContent = "New Colors!";
	//change colors of square:
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

changecolor.textContent = pickedcolor;
for(var i = 0; i<= squares.length; i++){
	 squares[i].style.backgroundColor = colors[i]; 

squares[i].addEventListener("click", function() {
	var clickedcolor = this.style.backgroundColor;
	if(clickedcolor === pickedcolor)
		{
			messagedisplay.textContent = "Correct";
			changecolors(clickedcolor);
			h1.style.backgroundColor = clickedcolor;
			resetbutton.textContent = "PlayAgain?";
		}
	else 
		{
			this.style.backgroundColor = "#232323" ;
			messagedisplay.textContent = "Try again";
		}
});
}


function changecolors(color){
	for(var i = 0; i < squares.length; i++)
		{
			squares[i].style.backgroundColor = color;
		}
}

function pickcolor(){
	var random = Math.floor(Math.random()* colors.length);
	return colors[random];
}

function generaterandomcolor(num){
	//create an empty array
	var arr = [];
	// add num to random generated color
	for(var i = 0; i < num; i++){
		arr.push(randomcolor());
	}
	//return that array
	return arr;
}

function randomcolor(){
	//generate redcolor 0-255
	var red = Math.floor(Math.random() * 256);
	//generate bluecolor 0-255
	var blue = Math.floor(Math.random() * 256);
	//generate greencolor 0-255
	var green = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + blue + ", " + green +")";
}

