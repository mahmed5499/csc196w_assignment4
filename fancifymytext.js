function showAlert() {
    alert("Hello, world!");
}

function bigger() {
    document.getElementById("TextArea").style.fontSize = "24pt";
}

function fancy() {
    document.getElementById("TextArea").style.fontWeight = "bold";
    document.getElementById("TextArea").style.color = "blue";
    document.getElementById("TextArea").style.textDecoration = "underline";
    alert("Boom! Fancified!");
}

function boring() {
    document.getElementById("TextArea").style.fontWeight = "normal";
    document.getElementById("TextArea").style.color = "black";
    document.getElementById("TextArea").style.textDecoration = "none";
    alert("Ew, boring!");
}

function moo() {
    let caps = document.getElementById("TextArea").value.toUpperCase().replaceAll("-MOO","-Moo");
    let suffix = caps.split(".");
    caps = suffix.join(" -Moo");
    document.getElementById("TextArea").value = caps;
}



let biggerButton = document.getElementById("biggerButton");
bigger.addEventListener("click", bigger)

let fancyButton = document.getElementById("fancyButton");
fancy.addEventListener("click", fancy)

let cowButton = document.getElementById("cowButton");
moo.addEventListener("click", moo)
