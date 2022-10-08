const tooltip = document.querySelector(".main__tooltip");
const tooltiptext = document.querySelector(".main__tooltiptext");

tooltip.addEventListener("click", () => {
    tooltiptext.classList.toggle("main__tooltiptext_active");
});
tooltip.addEventListener("mouseenter", () => {
    tooltiptext.classList.add("main__tooltiptext_active");
});

tooltip.addEventListener("mouseleave", () => {
    tooltiptext.classList.remove("main__tooltiptext_active");
});
