const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const image = new Image();
image.src = "./img/wave.png";
const imgWidth = 1440 / 2;
const imgHeight = 780;

const imageSlice = 2;

image.addEventListener("load", draw);

let speed = 0;
function draw() {
    speed += 0.05;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for (let i = 0; i < imgWidth; i++) {
        ctx.drawImage(
            image,

            i * imageSlice,
            -5 + Math.sin(speed - i / 40) * 2,
            imageSlice,
            imgHeight,

            i * imageSlice,
            0,
            imageSlice,
            imgHeight
        );
    }

    requestAnimationFrame(draw);
}

draw();
