const form=document.querySelector('form');
let random=parseInt(Math.random()*100+1);
const info=document.querySelector('.message');
const remaining=document.querySelector('.Remaining-guesses');
const previous=document.querySelector('.Previous-guesses');
const button=document.querySelector('.submit');
let numGuess=9;
const textBox=document.querySelector('.number');
const startOver=document.querySelector('.start-over');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const digit=parseInt(textBox.value)
    if(digit<1 || digit>100 || isNaN(digit)){ //validation checked
        alert("Please Enter a Valid Number");
    }
    else{
        if(numGuess===10){
            displayMesaage(`Ooops!! Seems like you've used all your chances.Click on new game to start over`);
            endGame();
        }
        else{
            random=parseInt(Math.random()*100+1);
            checkNo(digit);
            cleanupGuess(digit);
        }
    }
})

function checkNo(digit){ //compared digit with randomly generated number
    if(digit===random){
        displayMesaage(`Your guess is correct!!Hurray`);
    }
    else if(digit<random){
        displayMesaage(`Your guess is TOOO low.The random no. was, ${random}`);
    }
    else if(digit>random){
        displayMesaage(`Your guess is TOOO high.The random no. was, ${random}`);
    }
}


function cleanupGuess(digit){
    textBox.value='';
    previous.innerHTML+=`${digit},`;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
}



function displayMesaage(message){
    info.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    button.style.display='none';
    startOver.style.display='inline-block';
}

startOver.addEventListener('click',function(e){
    info.innerHTML='';
    numGuess=1;
    previous.innerHTML='';
    console.log(`${previous}`)
    remaining.innerHTML=10;
    startOver.style.display='none';
    button.style.display='inline-block';
})

