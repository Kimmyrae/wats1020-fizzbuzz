// Place your FizzBuzz code here. 
console.log ('Hello World');
// Count numbers 1-20 to see if it is divisible by 3, 5, or both.
for (var i=1; i<=20; i++) {
//For every number do the following checks

	//See if it is divisible by 3.
	if (i % 3===0){
		console.log ('Fizz');
	} else if (i % 5===0){
		console.log('Buzz');	
	} else if (i % 15===0){
	//If divisible by 3 AND 5 print FIZZBUZZ.
		console.log ('FizzBuzz');
	} else{
		console.log(i);
	} 
}
	