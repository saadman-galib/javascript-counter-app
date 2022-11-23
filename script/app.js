var countNum = document.getElementById("counter");
var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");

var num = 0;
countNum.innerHTML = num;

increase.addEventListener("click", (a) => {
    num += 1;
    countNum.innerHTML = num;
    decrease.style.backgroundColor = '#44b3d7';
});
decrease.addEventListener("click", (a) => {
    num -= 1;
    if (num <= 0){
        decrease.style.backgroundColor = "#6CA5B6";
        num = 0
    }

    countNum.innerHTML = num;
});
