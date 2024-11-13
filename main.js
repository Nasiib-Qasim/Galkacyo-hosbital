let displaysvalue = document.querySelectorAll(".num");

let inteval = 1000;

displaysvalue.forEach(displayvalue=>{
    let startValue = 0;
    let EndValue = parseInt(displayvalue.getAttribute("data-val"));
    let duration = Math.floor(inteval / EndValue);
    // console.log(duration)
    let counter = setInterval(function(){
        startValue += 1;
        displayvalue.textContent = startValue;
        if(startValue == EndValue){
            clearInterval(counter);
        }
    },duration);
   
})