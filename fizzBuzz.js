var n = 1;
while (n <= 100){
if (n%3===0 && n%5===0){    //if n%3===0, and n%5===0 then the number is a multiple of 3 and 5
  console.log("FizzBuzz!" + "(" + n + ")"); //Print FizzBuzz and the number
}else if (n%3===0) {        //if n%3===0, then the number is a multiple of 3
  console.log("Fizz!" + "(" + n + ")");  //Print Fizz and the number
}else if (n%5===0){        //if n%5===0, then the number is a multiple of 5
  console.log("Buzz!" + "(" + n + ")"); //Print Buzz and the number
}else{
  console.log(n);
}
n ++;
}
