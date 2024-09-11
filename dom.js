const  d = document.querySelector(".data");
d.classList.add('open');
d.classList.add('cool');
d.classList.toggle('round')
console.log(d.classList);
const  dataEl = document.querySelector(".data1");
dataEl.classList.add("open");
dataEl.classList.toggle("round");
console.log(dataEl.classList);


function toggleRound(){
    d.classList.toggle('round')
}
dataEl.addEventListener("click", toggleRound);



function toggleRoundEl(){
    dataEl.classList.toggle('round')
}
dataEl.addEventListener("click", toggleRoundEl);
 
d.alt = "NICE Picture";
console.log(d.alt);