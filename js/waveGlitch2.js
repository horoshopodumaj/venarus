const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
const canvasWidth2 = canvas2.width;
const canvasHeight2 = canvas2.height;

const image2 = new Image();
image2.src = "./img/wave2.png";
const imgWidth2 = 1440 / 2;
const imgHeight2 = 870;

const imageSlice2 = 2;

image2.addEventListener("load", draw2);

let speed2 = 0;
function draw2() {
    speed2 += 0.05;
    ctx2.clearRect(0, 0, canvasWidth2, canvasHeight2);

    for (let i = 0; i < imgWidth2; i++) {
        ctx2.drawImage(
            image2,

            i * imageSlice2,
            -10 + Math.sin(speed2 - i / 40) * 2,
            imageSlice2,
            imgHeight2,

            i * imageSlice2,
            0,
            imageSlice2,
            imgHeight2
        );
    }

    requestAnimationFrame(draw2);
}

draw2();
