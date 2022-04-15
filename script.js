let display = document.getElementById("screen");
const myform = document.querySelector("#myForm");
// let equation = [];
let resultc = '';
function inputIntake(value){
      if (value === "+" || value === "-" || value === "*" || value === "/" ){
            resultc += display.value + value
            display.value=""
          console.log(resultc)
      }
 
      else if (value === "(" || value === ")" ) {
            display.value=""
            resultc += display.value + value
            console.log(resultc)
      }
 else {
      display.value += value;
      }  
      }
      

function result(){
      resultc += display.value
      console.log(resultc)
      display.value = eval(resultc)
}


function clear(){
      // display.value ='';
      resultc = '';
      myform.reset();
      console.log(display.value)
}
// display.addEventListener("keyup", function(e) {
//       // Number 13 is the "Enter" key on the keyboard
//       if (e.keyCode === 13) {
//         // Cancel the default action, if needed
//         e.preventDefault();
//         // Trigger the button element with a click
//         document.getElementById("myBtn").click();
//       }
//     }); 

function backspace(){
      resultc += display.value ;
      resultc = resultc.slice(0, -1);
      display.value = '';
      console.log(resultc)
}

