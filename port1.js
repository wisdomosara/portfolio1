
function openNav(){
let x = document.querySelector("#mobile-button")
x.classList.toggle("change");

let nav = document.querySelector("#changebutton")
nav.classList.toggle("show")
}

let i = 0
    var txt1 = "My Name is Wisdom" + "\n"  + "I'm a Web Developer"
    var speed = 100;
function typeWriter() {
    if (i < txt1.length) {
        document.querySelector(".herotext").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    }
}



