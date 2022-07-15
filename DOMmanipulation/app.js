document.getElementById("container");
document.querySelector("#container");
document.querySelectorAll("li.second");
document.querySelector("ol .third");
let section = document.querySelector("#container");
//section.innerText = "Hello!";
let footer = document.querySelector(".footer");
footer.classList.add("main");
footer.classList.remove("main");
let li = document.createElement("li");
li.innerText = "four";
let ul = document.querySelector("ul");
ul.appendChild(li);
let ol = document.querySelectorAll("ol li");
for(let i =0; i < ol.length; i++){
    ol[i].style.backgroundColor = "green";
}
footer.remove()