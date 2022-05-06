function add(numbers : string) : number {
  if(!numbers) return 0;
  
  return numbers
    .split(",")
    .map(x => parseInt(x))
    .reduce((x,y) => x+y, 0)
  

}

exports.add = add;