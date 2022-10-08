const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");
const canvasWidth3 = canvas3.width;
const canvasHeight3 = canvas3.height;

const image3 = new Image();
image3.src = "./img/wave3.png";
const imgWidth3 = 1440 / 2;
const imgHeight3 = 870;

const imageSlice3 = 2;

image3.addEventListener("load", draw3);

let speed3 = 0;
function draw3() {
    speed3 += 0.05;
    ctx3.clearRect(0, 0, canvasWidth3, canvasHeight3);

    for (let i = 0; i < imgWidth3; i++) {
        ctx3.drawImage(
            image3,

            i * imageSlice3,
            -10 + Math.sin(speed3 - i / 40) * 2,
            imageSlice3,
            imgHeight3,

            i * imageSlice3,
            0,
            imageSlice3,
            imgHeight3
        );
    }

    requestAnimationFrame(draw3);
}

draw3();
