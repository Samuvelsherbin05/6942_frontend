function gettotal(numbers) {

    let total = 0;

  for (let i = 0; i < numbers.length; i++) {

    total = total + numbers[i]
    
    
  }

  return total;
}

console.log(gettotal([10,20,30,40,50]));



