<script>
var x = setInterval(myFunction, 300);

function myFunction() {
    document.getElementById("a4").style.display = "none"
}

var y = setInterval(yourFunction, 600);

function yourFunction() {
    document.getElementById("a5").style.display = "none";
}

var zz = setInterval(hisFunction, 900);

function hisFunction() {
    document.getElementById("a2").style.display = "none"
}

setInterval(theirFunction, 1200);

function theirFunction() {
    document.getElementById("a6").style.display = "none"
}

setInterval(loadFunction ,1500);

function loadFunction() {
    document.getElementById("a3").style.display = "none";
}

setInterval(load1Function, 1800);

function load1Function() {
    document.getElementById("a4").style.display = "block";
    clearInterval(x)
}

setInterval(load2Function, 2100);

function load2Function() {
    document.getElementById("a5").style.display = "block";
    clearInterval(y)
}

setInterval(load3Function, 2500);

function load3Function() {
    document.getElementById("a2").style.display = "block";
    clearInterval(zz)
}

setInterval(load4Function, 2800);

function load4Function() {
    document.getElementById("a6").style.display = "block";
}

setInterval(load8Function, 3000);

function load8Function() {
    document.getElementById("content").style.display = "none";
}


</script>
