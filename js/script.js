let modal = document.getElementById("modal");

function modalOpen(element) {
    modal.style.display = "flex";

    let modalImage = document.getElementById("modal_img");
    let modalDescription = document.getElementById("modal_txt");
    modalImage.src = element.src;
    // modalDescription.innerHTML = element.alt;
    modalDescription.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>";

    document.body.classList.add("modal-open");
}

function modalClose() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
}
