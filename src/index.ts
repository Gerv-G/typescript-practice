function add(numbers : string) : number {
  if(!numbers) return 0;
  
  return parseInt(numbers);
}

exports.add = add;