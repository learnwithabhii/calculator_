let display= document.getElementById('screen');
function allclear(){
    display.value="";
}

function show(n){
    display.value+=n;
}

function calc(){
    display.value = eval(display.value);
}
function clear(){
    display.value= display.value.toString().slice(0,-1);
}