
const btn1 = document.querySelector(".box button.start");
const btn2 = document.querySelector(".box button.stop");
const btn3 = document.querySelector(".box button.reset");

const h1 = document.querySelector(".box h1");
/***
 *
 *** counter  
 * 
 */

  let count = 0;
  let counter;

// First  button click
  btn1.onclick = () => {
    h1.innerHTML = count;

    counter =  setInterval(() =>{
      count++;
    h1.innerHTML = count;
    }, 1000);
  };

// Second button click
btn2.onclick = () => { 
  clearInterval(counter);
}

// third button click
btn3.onclick = () => { 
  clearInterval(counter);
  count = 0;
  h1.innerHTML = count;
}



















