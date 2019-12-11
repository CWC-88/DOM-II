// Your code goes here

let one = document.getElementById("logo-heading")
one.addEventListener("mouseover",function(event){
event.target.style.color = pink;
})

// darkmode
let two  = document.getElementsByTagName(".body")
two.addEventListener("keydown",function(event){
    event.target.style.color = white;
    background.style.color = black;

})

let three  = document.getElementsByTagName("header")
three.addEventListener("wheel",function(event){
    event.target.style.color = green;
})

let four  = document.getElementsByTagName("section")
four.addEventListener("drag",function(event){
    event.target.style.color = red;
})

let five  = document.getElementById("intro")
five.addEventListener("load",function(event){
    event.target.style.color = blue;
})
let six  = document.getElementById("text-content")
six.addEventListener("focus",function(event){
    event.target.style.color = brown;
})

let seven  = document.getElementById("img-content")
seven.addEventListener("resize",function(event){
    event.target.style.color = teal;
})

let eight  = document.getElementById("destination")
eight.addEventListener("scroll",function(event){
    event.target.style.color = rose;
})

let nine  = document.getElementById("btn")
nine.addEventListener("select",function(event){
    event.target.style.color = purple ;
})

let ten  = document.getElementById("footer")
ten.addEventListener("dblclick",function(event){
  footer.style.backgroundColor = red;
})

