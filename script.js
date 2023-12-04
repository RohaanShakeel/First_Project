window.addEventListener('load', () =>{
// Declaring Variables
const canvas = document.querySelector('#canvas');
const textArea = document.querySelector('#text');
const context = canvas.getContext('2d');
const clear = document.querySelector(".clear");
const addText = document.querySelector('#Add-Text')

canvas.width = window.innerWidth
canvas.height = window.innerHeight


//Color Picker
const pickr = Pickr.create({
el: '.color-picker',
theme: 'classic', // or 'monolith', or 'nano'
default: '#000000',

swatches: [
    'rgba(244, 67, 54, 1)',
    'rgba(233, 30, 99, 0.95)',
    'rgba(156, 39, 176, 0.9)',
    'rgba(103, 58, 183, 0.85)',
    'rgba(63, 81, 181, 0.8)',
    'rgba(33, 150, 243, 0.75)',
    'rgba(3, 169, 244, 0.7)',
    'rgba(0, 188, 212, 0.7)',
    'rgba(0, 150, 136, 0.75)',
    'rgba(76, 175, 80, 0.8)',
    'rgba(139, 195, 74, 0.85)',
    'rgba(205, 220, 57, 0.9)',
    'rgba(255, 235, 59, 0.95)',
    'rgba(255, 193, 7, 1)'
],

components: {

    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
        hex: true,
        rgba: true,
        input: true
    }
}
});

pickr.on('change', (color, instance) => {
const colorChanger = color.toRGBA().toString();
context.strokeStyle = colorChanger
});

//User resizable Canvas 
formElement = document.getElementById("canvasWidth");
formElement.addEventListener('change', canvasWidthChanged, false);
formElement = document.getElementById("canvasHeight");
formElement.addEventListener('change', canvasHeightChanged, false);
function canvasWidthChanged(e) {
canvas.width = false
var target = e.target;
canvas.width = target.value;
drawScreen();
}

function canvasHeightChanged(e) {
canvas.height = false
var target =  e.target;
canvas.height =  target.value;
drawScreen();
}

//Clearing The Canvas
clear.addEventListener('click', clearCanvas);

function clearCanvas() {
context.clearRect(0, 0, canvas.width, canvas.height);
}



//Drawing features/functions
let painting = false;

function startPosition() {
painting = true;
};
function finishedPosition() {
painting = false;
context.beginPath();
}

function draw(e) {
if(!painting) return;
context.lineWidth = 10
context.lineCap = 'round';

context.lineTo(e.clientX, e.clientY);
context.stroke();
context.beginPath();
context.moveTo(e.clientX, e.clientY);

}


//Event Listeners for drawing 
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);


fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.padding = 5;


var $ = function(id){return document.getElementById(id)};


var c = this.__c = new fabric.Canvas('c');
c.setHeight(300);
c.setWidth(500);


addText.addEventListener('click', ()=>{
c.add(new fabric.IText('Add Text', { 
left: 50,
top: 100,
fontFamily: 'arial black',
fill: '#333',
fontSize: 50
}));
});


document.getElementById('text-color').onchange = function() {
c.getActiveObject().setFill(this.value);
c.renderAll();
};
document.getElementById('text-color').onchange = function() {
c.getActiveObject().setFill(this.value);
c.renderAll();
};

document.getElementById('text-bg-color').onchange = function() {
c.getActiveObject().setBackgroundColor(this.value);
c.renderAll();
};

document.getElementById('text-lines-bg-color').onchange = function() {
c.getActiveObject().setTextBackgroundColor(this.value);
c.renderAll();
};

document.getElementById('text-stroke-color').onchange = function() {
c.getActiveObject().setStroke(this.value);
c.renderAll();
};	

document.getElementById('text-stroke-width').onchange = function() {
c.getActiveObject().setStrokeWidth(this.value);
c.renderAll();
};				

document.getElementById('font-family').onchange = function() {
c.getActiveObject().setFontFamily(this.value);
c.renderAll();
};

document.getElementById('text-font-size').onchange = function() {
c.getActiveObject().setFontSize(this.value);
c.renderAll();
};

document.getElementById('text-line-height').onchange = function() {
c.getActiveObject().setLineHeight(this.value);
c.renderAll();
};

document.querySelector('#text-align').onchange = function() {
c.getActiveObject().setTextAlign(this.value);
c.renderAll();
};


radios5 = document.getElementsByName("fonttype");  // wijzig naar button
for(var i = 0, max = radios5.length; i < max; i++) {
radios5[i].onclick = function() {

if(document.getElementById(this.id).checked == true) {
    if(this.id == "text-cmd-bold") {
        c.getActiveObject().set("fontWeight", "bold");
    }
    if(this.id == "text-cmd-italic") {
        c.getActiveObject().set("fontStyle", "italic");
    }
    if(this.id == "text-cmd-underline") {
        c.getActiveObject().set("textDecoration", "underline");
    }
    if(this.id == "text-cmd-linethrough") {
        c.getActiveObject().set("textDecoration", "line-through");
    }
    if(this.id == "text-cmd-overline") {
        c.getActiveObject().set("textDecoration", "overline");
    }
    
    
    
} else {
    if(this.id == "text-cmd-bold") {
        c.getActiveObject().set("fontWeight", "");
    }
    if(this.id == "text-cmd-italic") {
        c.getActiveObject().set("fontStyle", "");
    }  
    if(this.id == "text-cmd-underline") {
        c.getActiveObject().set("textDecoration", "");
    }
    if(this.id == "text-cmd-linethrough") {
        c.getActiveObject().set("textDecoration", "");
    }  
    if(this.id == "text-cmd-overline") {
        c.getActiveObject().set("textDecoration", "");
    }
}


c.renderAll();
}
}
});