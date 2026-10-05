function getcounter() {

    let count = 0;


    function  counter() {

        count = count+1
        console.log(count);
        
        
    }

       return counter;
    
}

let mycounter = getcounter();
  


   mycounter();
    mycounter();
     mycounter();