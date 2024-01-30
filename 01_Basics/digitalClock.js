//Digital Clock

let hourHand = document.querySelector('.hour');
let minHand = document.querySelector('.minute');
let secHand = document.querySelector('.second');


// console.log(hourHand.textContent , minHand.textContent , secHand.textContent);  // at a particular time ka information dega

let ticking = function() {
    let currentDate = new Date();

    // console.log(currentDate);
    
    let getHour = currentDate.getHours();
    let getMin = currentDate.getMinutes();
    let getSec = currentDate.getSeconds();

    hourHand.textContent = getHour;
    minHand.textContent = getMin;
    secHand.textContent = getSec;
    
}
setInterval(ticking , 1000);