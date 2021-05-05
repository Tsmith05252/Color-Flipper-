/* get the title */
let title = document.getElementById("name");

/* get the body */
let body = document.body.innerHTML; 

// declare number 
let number = "123456789";

// declare alphabet 
let alphabet = "abcdef";

// get the random number
function getRandomNumber()
{
  return number[(Math.floor(Math.random()) * number.length)];
}
  
// get the random alphabet 
function getRandomAlphabet() 
{
  return alphabet[(Math.floor(Math.random()) * alphabet.length)];
}

function getRandom()
{
// create an array to put both the number + alphabet in
    let arr = [];
    arr.push(getRandomNumber());
    arr.push(getRandomAlphabet());
  
    // this is an array filled with both the random numbr and alphabet
    return arr[Math.floor(Math.random() * arr.length)];
    
}

// click the button 
function onClick()
{
  let hex = " # " 

  // go through array 
  for (let i = 0; i < 6; i++)
  {
    //call the function + get the random number/alphabet from the array after the hex #  
    hex += getRandom(); 
  }
  
    // change the background color using the hex array 
    document.body.style.background = hex; 
 
}





