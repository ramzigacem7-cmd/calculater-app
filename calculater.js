// ================== variable ======================

const myscreen= document.querySelector(".screen");
const mybtn= document.querySelectorAll(".btn");
const myclearall= document.querySelector(".clearall");
const myclear= document.querySelector(".clear");
const mydivide= document.querySelector(".divide");
const myequal= document.querySelector(".equal");
const mymultip= document.querySelector(".multip");
const mymines= document.querySelector(".mines");
const myplus= document.querySelector(".plus");
const myon= document.querySelector(".on");
const myoff= document.querySelector(".off");
const allButtons = document.querySelectorAll(".calculater button");
const myremain= document.querySelector(".remain");
const mysquart= document.querySelector(".squart");
const mycos= document.querySelector(".cos");
const mysin= document.querySelector(".sin");
let first_number;
let second_number;
let isother = false;
let operator = null;
let  option = null;
const operators = {
  "+": "+",
  "-": "-",
  "*": "*",
  "/": "/",
  "%": "%",
};

const options ={  "√" : mysquart, "cos":mycos, "sin":mysin}
const ops ={"+":myplus, "-":mymines, "*":mymultip, "/":mydivide, "%":myremain};

// ===== calculate function =======
function calculate(){
second_number= parseFloat(myscreen.textContent);
 clearAll();
if(isNaN(second_number) || isNaN(first_number)) return;
switch(operator){
  case "+" :
  myscreen.textContent = first_number+second_number;
  break;
  case "-" :
   myscreen.textContent = first_number-second_number;
   break;
  case "*" :
     myscreen.textContent = first_number*second_number;
   break;
 case "/" :
  if(second_number === 0){
     myscreen.textContent = "error";
  }else{
    myscreen.textContent =  first_number/second_number;
  }
  break;
  case "%" :
    if(second_number === 0){
     myscreen.textContent = "error";
  }else{
    myscreen.textContent =  first_number%second_number;
  }
  break;
  default:
    myscreen.textContent = second_number;
}
operator = null;
}

// ===== operation function =====

function operation(){
   first_number= parseFloat(myscreen.textContent); 
   
     myscreen.textContent ="";
}

// ===== clear function ===

function clearOne(){
  myscreen.textContent = myscreen.textContent.slice(0 , -1);
}
// ==== clearAll function ====

function clearAll(){
  myscreen.textContent = "";
}

// ==== other opiration ====

function otheroperation(){
  let num= parseFloat(myscreen.textContent);
  clearAll();
  switch(option){
 case "√":
 if(!isNaN(num) && num >= 0){
myscreen.textContent = Math.sqrt(num);
 }break;
 case "cos":
myscreen.textContent = Math.cos(num);
break;
case "sin":
  myscreen.textContent = Math.sin(num);
break;
}
}

allButtons.forEach(button =>{
    button.addEventListener("click", () =>{
        if ((button.textContent === "." && myscreen.textContent.includes(".")) || button.classList.contains("clear") || button.classList.contains("squart") || button.classList.contains("cos") || button.classList.contains("sin")) {
    return; 
}
myscreen.textContent += button.textContent;
    })
})
// ====== option √ cos sin ======

for(let op in options){
options[op].addEventListener("click", ()=>{
  option = op;
  isother = true;
})
}

// ============== clear ==================

 myclear.addEventListener("click", () =>{
    clearOne();
})

// =============== clear all ==================

myclearall.addEventListener("click", () =>{
    clearAll()
})

// ============ arithmitic operations =====

for(let key in ops){
  ops[key].addEventListener("click", ()=>{
    operator = key;
    operation();
  });
}

// ============ opirations ==============

myequal.addEventListener("click", () =>{
  if(isother){
otheroperation()
isother = false;
  }else{
     calculate();
  }

});

// ======= دالة تشغيل =========

myon.addEventListener("click", ()=>{
    myscreen.textContent = "";
  allButtons.forEach(btn => {
    btn.disabled = false;
  });
})

// ======= دالة إطفاء =========

myoff.addEventListener("click", () => {
clearAll();
  allButtons.forEach(btn => {
    if (!btn.classList.contains("off") && !btn.classList.contains("on")) {
      btn.disabled = true;
    }
  });
});

// ==== افتراضياً نخلي الكل disabled إلا on ====

allButtons.forEach(btn => {
  if (!btn.classList.contains("on")) {
    btn.disabled = true;
  }
});

// === controle by the keybord ===

document.addEventListener("keydown", (event) => {

if(event.key === "." && myscreen.textContent.includes(".") || event.key === "=" ){
return;
}

  if(event.key === "o" || event.key === "O"){
allButtons.forEach(btn => {
  btn.disabled = false;
});
return; 
}

if(event.key === "x" || event.key === "X"){
clearAll();
allButtons.forEach(btn =>{
  if(!btn.classList.contains("on") && !btn.classList.contains("off")){
btn.disabled = true;
  }
});
return;

}

 if(event.key === "Backspace"){
clearOne();
}

if(event.key === "l" || event.key === "L" ){
clearAll();
}

allButtons.forEach(btn =>{
  if(event.key === btn.textContent && !btn.disabled && !btn.classList.contains("clear") 
     && !btn.classList.contains("clearall")){
   myscreen.textContent += btn.textContent;
  }
})

 if (event.key in operators) {
    operator = operators[event.key];
    operation();
  }

  if (event.key === "Enter") {
    calculate();
  }
});
