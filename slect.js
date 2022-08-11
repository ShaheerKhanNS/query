


const item =document.querySelector('.list-group-item:nth-child(2)');

item.style.color="red";
item.style.backgroundColor="green";

const item2 = document.querySelector(".list-group-item:nth-child(3)");

// item2.style.display ="none";

const items3 = document.querySelectorAll("li:nth-child(even)");

for(let i=0;i<items3.length;i++){
    items3[i].style.color="yellow";
    items3[i].style.backgroundColor="orange";
}
const items4= document.querySelectorAll("li:nth-child(odd)");

for(let i=0;i<items4.length;i++){
    items4[i].style.backgroundColor ="green";
    items4[i].style.color="red";
}