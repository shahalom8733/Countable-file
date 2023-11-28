     let valueCount = 0;

let increment = document.querySelector('.plus');
let decrement = document.querySelector('.minus');
let count = document.querySelector('#btncost');

let increments = document.querySelector('.pluss');
let decrements = document.querySelector('.minuss');
let counts = document.querySelector('#btncosts');


let totalcount = document.querySelector('.totaladd');
let totalcounts = document.querySelector('.second');


increment.addEventListener("click",()=>{
    let add = valueCount++;
   count.value=add;
   let resentCount = totalcount.innerHTML=add*1;
 });

 decrement.addEventListener("click",()=>{
   if(valueCount >= 1){
   let sub = --valueCount;
   count.value=sub;
   let resentCounts = totalcount.innerHTML=sub*1;
   }
 });
