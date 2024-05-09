const clock=document.querySelector('.clock');

setInterval(function(){
    let date= new Date;
    clock.innerHTML=date.toLocaleTimeString();
    clock.style.color='black';
    clock.style.fontSize='20px';
    clock.style.fontWeight='bold';

},1000)