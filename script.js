const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const close = document.getElementById("close");
const dropdown = document.getElementById("sectionDropdown");
const sections = document.querySelectorAll(".gallery");

document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.nextElementSibling.innerHTML;
    });
});

close.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

dropdown.addEventListener("change", (event) => {
    sections.forEach(section => {
        if (section.id === event.target.value) {
            section.style.display = "flex";
        } else {
            section.style.display = "none";
        }
    });
});
