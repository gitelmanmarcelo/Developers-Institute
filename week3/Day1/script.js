let div1 = document.getElementById("container");
let div2 = document.getElementsByTagName("div")[0];
console.log("Hi!")
console.log(div1.textContent);
console.log(div2.textContent);

let li1=document.getElementsByClassName("list")[0].getElementsByTagName("li");
let li2=document.getElementsByClassName("list")[1].getElementsByTagName("li");
for (el of li1) { console.log(el.textContent); }
for (el of li2) { console.log(el.textContent); }

let lis = document.querySelectorAll("ul li");
for (el of lis) { console.log(el.textContent); }

let li11 = document.getElementsByTagName("ul")[0].getElementsByTagName("li")[0].textContent;
let li21 = document.getElementsByTagName("ul")[0].getElementsByTagName("li")[0].textContent;
console.log(li11);
console.log(li21);