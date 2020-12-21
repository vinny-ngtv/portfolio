let modal = document.getElementById("modal");

function modalOpen(element) {
    modal.style.display = "flex";

    let modalImage = document.getElementById("modal_img");
    let modalDescription = document.getElementById("modal_txt");

    modalImage.src = element.src;
    modalDescription.innerHTML = element.alt;

    document.body.classList.add("modal-open");
}

function modalClose() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
}
