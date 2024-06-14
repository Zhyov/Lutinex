document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".theme");
    const img = document.getElementById("image");
    const body = document.body;

    button.addEventListener("click", function() {
        if (img.src.includes("white")) {
            img.src = "../../title-dark.png";
        } else {
            img.src = "../../title-white.png";
        }

        if (body.id === "dark") {
            body.removeAttribute("id");
        } else {
            body.id = "dark";
        }
    });
});