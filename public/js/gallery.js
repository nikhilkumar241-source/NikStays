const modal = document.getElementById("imageModal");

if (modal) {

    const images = [...document.querySelectorAll(".gallery-image")];
    const thumbs = document.querySelectorAll(".gallery-thumb");

    let currentIndex = 0;

    const modalImg = document.getElementById("galleryModalImage");
    const counter = document.getElementById("galleryCounter");

    function showImage(index) {

        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;

        currentIndex = index;

        modalImg.src = images[currentIndex].src;

        counter.innerText = `${currentIndex + 1} / ${images.length}`;

        thumbs.forEach((thumb) => thumb.classList.remove("active"));

        if (thumbs[currentIndex]) {
            thumbs[currentIndex].classList.add("active");
        }
    }

    // Open modal from the clicked image
    images.forEach((img) => {

        img.addEventListener("click", () => {

            currentIndex = Number(img.dataset.index);

            showImage(currentIndex);

        });

    });

    // Thumbnail click
    thumbs.forEach((thumb) => {

        thumb.addEventListener("click", () => {

            showImage(Number(thumb.dataset.index));

        });

    });

    // Next
    document.getElementById("nextImage").addEventListener("click", () => {

        showImage(currentIndex + 1);

    });

    // Previous
    document.getElementById("prevImage").addEventListener("click", () => {

        showImage(currentIndex - 1);

    });

    // When modal opens
    modal.addEventListener("shown.bs.modal", () => {

        showImage(currentIndex);

    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {

        if (!modal.classList.contains("show")) return;

        if (e.key === "ArrowRight") showImage(currentIndex + 1);

        if (e.key === "ArrowLeft") showImage(currentIndex - 1);

    });

}