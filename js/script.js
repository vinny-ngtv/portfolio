let modal = document.getElementById("modal");

let modalContent = document.getElementById("modal_content");
let modalDesc = document.getElementById("modal_desc");

let modalImage = document.getElementById("modal_img");
let modalDescription = document.getElementById("modal_txt");

function modalOpen(element) {
    modal.style.display = "flex";

    modalImage.src = element.src;
    modalDescription.innerHTML = element.alt;

    if (element.alt === "null") {
        modalDesc.classList.add("modal-description-box_null-alt");
        modalContent.classList.add("modal-content_null-alt");
    }

    if (element.src === "https://cdn.discordapp.com/attachments/772887475076988968/790596773420204062/Pomeg_final.jpg" || element.src === "https://cdn.discordapp.com/attachments/772887475076988968/790596769066647572/Pomefuse_final.jpg") {
        modalImage.classList.add("modal-image_full-width")
    }


    document.body.classList.add("modal-open");
}

function modalClose() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");

    modalDesc.classList.remove("modal-description-box_null-alt");
    modalContent.classList.remove("modal-content_null-alt");
    modalImage.classList.remove("modal-image_full-width")
}
