const my_btn=document.querySelectorAll('.btn');
const my_screen=document.querySelector('.screen');
const my_on=document.querySelector('.on');
const my_off=document.querySelector('.off');
const my_clean=document.querySelector('.clean');
const my_clean_all=document.querySelector('.clean_all');
const allbuttons=document.querySelectorAll('button');
const alloperation=document.querySelectorAll('.op');
const my_equal=document.querySelector('.equal');
const my_sqrt=document.querySelector('.sqrt');

// function to disabled or abled the buttons

function disabled_button(x){
 allbuttons.forEach(btn =>{
    if(btn.className != "on"){
        btn.disabled=x;
    }
})
}

<<<<<<< HEAD

my_screen.textContent=" ";
=======
my_screen.textContent=" ";

>>>>>>> 57e98c3093cdf42ab55e987cbd04ab278ac63940
disabled_button(true);

// Power ON

my_on.addEventListener("click", () =>{
   my_screen.textContent=" ";
  my_screen.textContent= "0";
  disabled_button(false);
<<<<<<< HEAD
})

// Power OFF

my_off.addEventListener("click", () =>{
    my_screen.textContent=" ";
disabled_button(true);
})

// show the symbol or number that we click on

=======
})
 

// Power OFF

my_off.addEventListener("click", () =>{
    my_screen.textContent=" ";
disabled_button(true);
})

// show the symbol or number that we click on

>>>>>>> 57e98c3093cdf42ab55e987cbd04ab278ac63940
my_btn.forEach(btn => {
    btn.addEventListener("click", () =>{
        if(my_screen.textContent == "0"){
            my_screen.textContent=" ";
        }
      my_screen.textContent=my_screen.textContent+btn.textContent;
})
});

// squart click

my_sqrt.addEventListener("click", ()=>{
     if(my_screen.textContent == "0"){
            my_screen.textContent=" ";
        }
    my_screen.textContent += "sqrt(";
})

// clear all screen

my_clean_all.addEventListener("click",()=>{
     my_screen.textContent="0";
})

//  clear button

let screen="";
my_clean.addEventListener("click",()=>{ 
    my_screen.textContent=my_screen.textContent.slice(0,-1);
     screen=my_screen.textContent;
    if(screen[1] == null){
        my_screen.textContent="0";
    }
})

// click equal to display the result

my_equal.addEventListener("click",()=>{
    try{
      const parser= new exprEval.Parser();
      my_screen.textContent=parser.evaluate(my_screen.textContent);
    }catch(Error){
    }
   
})












