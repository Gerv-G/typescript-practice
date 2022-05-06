function add(numbers : string) : number {
  if(!numbers) return 0;
  
  return numbers
    .split(",")
    .flatMap(x => x.split("\n"))
    .map(x => parseInt(x))
    .reduce((x,y) => x+y, 0)
  
}

exports.add = add;