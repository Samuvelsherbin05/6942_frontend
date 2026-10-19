function outer() {

    let count = 0

   return  function inner() {
    
          count +=10

        console.log(count);
        
    }
    
}

let result = outer()
result()
result()
result()
result()
result()
result()