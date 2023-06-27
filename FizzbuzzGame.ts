/* FizzBuzz Game */
function fizzBuzz( number: number){
    if (number % 3 == 0 && number%5 == 0) return "FizzBuzz!";
    if (number % 5 ==0) return "Buzz!";
    if (number% 3 ==0) return "Fizz!";
    else return number;
}

console.log(fizzBuzz(15));