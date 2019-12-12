// Your code goes here

let one = document.querySelector(".logo-heading")
one.addEventListener("mouseover",function(event){
event.target.style.color = "pink";
}
)

console.log(one)

// // darkmode
let two  = document.querySelector("body")
two.addEventListener("keydown",function(event){
    event.target.style.color = "white";
    event.target.style.background = "black";

})

let three  = document.querySelector("nav")
three.addEventListener("mouseover",function(event){
    event.target.style.color = "green";
})

let four  = document.querySelector(".text-content")
four.addEventListener("mouseover",function(event){
    event.target.style.color = "red";
})

let five  = document.querySelector(".intro")
five.addEventListener("mouseover",function(event){
    event.target.style.color = "blue";
})



let six  = document.querySelector(".text-content")
six.addEventListener("mouseover",function(event){
    event.target.style.color = "brown";
})

let seven  = document.querySelector(".img-content")
seven.addEventListener("mouseover",function(event){
    event.target.style.color = "teal";
})

let eight  = document.querySelector(".destination")
eight.addEventListener("mouseover",function(event){
    event.target.style.color = "rose";
})

let nine  = document.querySelector(".btn")
nine.addEventListener("mouseover",function(event){
    event.target.style.color = "purple" ;
})

let ten  = document.querySelector(".footer")
ten.addEventListener("mouseover",function(event){
  event.target.style.color = "red";
})

