let canvas = document.querySelector("canvas");
let cxt = canvas.getContext("2d");

let prevX = null;
let prevY = null;

cxt.lineWidth = 5;
let drow = false;

canvas.addEventListener("mousedown", () => {
    drow = true;
});
canvas.addEventListener("mouseup", () => {
    drow = false;
});

canvas.addEventListener("mousemove", (e) => {
    // console.log(this);
    if (prevX == null || prevY == null || !drow) {
        prevX = e.offsetX;
        prevY = e.offsetY;
        return;
    }
    let currentX = e.offsetX;
    let currentY = e.offsetY;

    cxt.beginPath();
    cxt.moveTo(prevX, prevY);
    cxt.lineTo(currentX, currentY);
    // cxt.strokeStyle = color.style.backgroundColor;
    cxt.stroke();

    prevX = currentX;
    prevY = currentY;
});

let myColor;

let palitra = document.querySelector(".palitra");

let color;

palitra.addEventListener("click", function active(e) {
    color = e.target;
    color.classList.add("active");
    // color.stopPropagation();
})


let lines = document.querySelectorAll('.dote');
lines.forEach(line => {
    line.addEventListener("click", handlerLine);
});

function handlerLine(e) {
    linear = e.target;
    linear.parentElement.classList.add("active");
}



let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    cxt.clearRect(0, 0, canvas.width, canvas.height);
})

let saveBtn = document.querySelector(".save");
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("imag/png");
    let a = document.createElement("a");
    a.href = data;
    a.download = "sketch.png";
    a.click();
})
