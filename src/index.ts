import { IllegalNegativeNumberError } from "./illegalNegativeNumberError";

function add(numbers : string) : number {
  if(!numbers) return 0;
  
  let numberList = numbers
    .split(",")
    .flatMap(x => x.split("\n"))
    .map(x => parseInt(x))
    .filter(x => !isNaN(x) && typeof(x) === 'number');
    
  let negativeNumbers = numberList.filter(x => x < 0);

  if(negativeNumbers.length != 0) {
    throw new IllegalNegativeNumberError(negativeNumbers);
  } 

  let sum = numberList.reduce((x,y) => x+y, 0)
  return sum;
  
}

exports.add = add;