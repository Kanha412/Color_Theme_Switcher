document.getElementById("grey").onclick = switchGrey;
document.getElementById("green").onclick = switchGreen;
document.getElementById("white").onclick = switchWhite;
document.getElementById("yellow").onclick = switchYellow;
document.getElementById("red").onclick = switchRed;
document.getElementById("blue").onclick = switchBlue;

function switchGrey() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "grey";
    document.getElementsByTagName("body")[0].style.color = "white";
}

function switchGreen() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "green";
    document.getElementsByTagName("body")[0].style.color = "black";
}

function switchWhite() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    document.getElementsByTagName("body")[0].style.color = "black";
}

function switchYellow() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "yellow";
    document.getElementsByTagName("body")[0].style.color = "black";
}

function switchRed() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "red";
    document.getElementsByTagName("body")[0].style.color = "black";
}

function switchBlue() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
    document.getElementsByTagName("body")[0].style.color = "white";
}