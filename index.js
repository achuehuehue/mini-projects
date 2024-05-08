const yellowButton=document.querySelector('.yellow');
const blueButton=document.querySelector('.blue');
const redButton=document.querySelector('.red');
const pinkButton=document.querySelector('.pink');

const body=document.querySelector("body");

yellowButton.addEventListener('click',function(e){
    body.style.backgroundColor='yellow';
})

blueButton.addEventListener('click',function(e){
    body.style.backgroundColor='rgb(0, 179, 255)';
})

redButton.addEventListener('click',function(e){
    body.style.backgroundColor='rgb(222, 49, 49)';
})

pinkButton.addEventListener('click',function(e){
    body.style.backgroundColor='rgb(214, 31, 144)';
})