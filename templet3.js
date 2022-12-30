let nums=document.querySelectorAll(".stats .number");
let statsSection=document.querySelector(".stats");
let started=false;

window.onscroll=function(){
    if(window.scrollY>=statsSection.offsetTop){
        if(!started){
            nums.forEach((num)=>startCount(num));
        }
        started=true
    }
}
function startCount(el){
    
    let goal=el.dataset.goal;
 let count=setInterval(()=>{
    el.textContent++;
    if(el.textContent==goal){
        clearInterval(count);
    }
    
},100);
}
let sectionskill=document.querySelector('.our-skills');
let spans=document.querySelectorAll(".the-progress span");

window.onscroll=function(){
    if(window.scrollY>=sectionskill.offsetTop+100){
        spans.forEach((span)=>{
            span.style.width=span.dataset.width;
        
    })}
};
        