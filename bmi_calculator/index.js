const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('.height').value);
    const weight=parseInt(document.querySelector('.weight').value);
    const result=document.querySelector('.result');
    const more_info=document.querySelector('.more-info');

    if(height<0 || height==='' || isNaN(height)){
        result.innerHTML="Please give a valid height";
    }
    else if(weight<0 || weight==='' || isNaN(weight)){
        result.innerHTML="Please give a valid weight";
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`${bmi}`;
        if(bmi<18.6){
            more_info.innerHTML="UNDERWEIGHT!!"
        }
        else if(bmi>24.9){
            more_info.innerHTML="OVERWEIGHT!!"
        }
        else{
            more_info.innerHTML="YOU'RE HEALTHY!!"
        }
    }
})