//I wrote code BOTH for terminal and for trying out in a browser

//Try this in a browser, it uses prompt.

var num = (prompt ("Please input a number greater than 100"));
while (num<100) {
	num = (prompt ("Please input a number greater than 100"));
}
alert ("Number is greater than 100!");


/*
This also accommodates data types other than numbers, *BUT!!*
It cannot break out of the prompt loop for some reason
*/

var num = (prompt ("Please input a number greater than 100"));
while (num<100 || typeof num !== "number") {
  num = (prompt ("Please input a number greater than 100"));
	}
	console.log ("Number is greater than 100!";)


//Try this in terminal, it uses variables to store the datalist

var num = (0);
while (num<100) {
	console.log ("This is still less than 100");
  num++;
}
console.log ("Congratulations! You reached the end of my code!")
