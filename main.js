var canvas= document.getElementById("myCanvas");
var mouse_event= "";
var color="green"
var width=2
ctx=canvas.getContext("2d");
var last_x,last_y,current_x,current_y;
canvas.addEventListener("mousedown",md);
function md(e){
color=document.getElementById("color_input").value;
width=document.getElementById("number_input").value;
    mouse_event="mousedown";
}
canvas.addEventListener("mouseup",mu);
function mu(e){
    mouse_event="mouseup"
}
canvas.addEventListener("mouseleave",ml);
function ml(e){
    mouse_event="mouseleave"
}
canvas.addEventListener("mousemove",mm);
function mm(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouse_event == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=3;
        ctx.arc(current_x,current_y,width,0,2*Math.PI)
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

