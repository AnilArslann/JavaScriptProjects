const image =document.querySelector('img');


let blur_input=document.querySelector(".controls input[name='blur']");
let spacing_input=document.querySelector(".controls input[name='spacing']");
let base_input=document.querySelector(".controls input[name='base']");


function set_values(){
    image.style.filter=`blur(${blur_input.value}px)`
    image.style.background=base_input.value;


}
set_values();

blur_input.addEventListener('input',function(){image.style.filter=`blur(${this.value}px)`;});
spacing_input.addEventListener('input',function(){image.style.padding=`${this.value}px`;});
base_input.addEventListener('input',function(){image.style.background=this.value;});


