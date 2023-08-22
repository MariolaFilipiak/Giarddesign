document.addEventListener("DOMContentLoaded", () => {
  const expandButton = document.getElementById("expandButton");
  const galleryImages = document.querySelector(".gallery-images");
  const gradientOverlay = document.querySelector(".gradient-overlay");
  const modalImage = document.getElementById("modalImage");
  const modal = new bootstrap.Modal(document.getElementById("imageModal"));

  const msnry = new Macy({
    container: ".gallery-images",
    mobileFirst: true,
    columns: 1,
    breakAt: { 576: 2, 768: 3, 992: 3 },
    margin: { x: 40, y: 40 },
  });

  const newImages = [
    "https://images.pexels.com/photos/11678318/pexels-photo-11678318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6829876/pexels-photo-6829876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/788485/pexels-photo-788485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8838614/pexels-photo-8838614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1652966/pexels-photo-1652966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1065874/pexels-photo-1065874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1590336/pexels-photo-1590336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1607015/pexels-photo-1607015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/327483/pexels-photo-327483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const showImageInModal = (imageSrc) => {
    modalImage.src = imageSrc;
    modal.show();
  };

  const addImageClickListener = (image) => {
    image.addEventListener("click", () =>
      showImageInModal(image.getAttribute("src"))
    );
  };

  expandButton.addEventListener("click", () => {
    expandButton.style.transform = "d-none";
    gradientOverlay.style.display = "none";

    galleryImages.querySelectorAll(".item").forEach(addImageClickListener);

    const addImagesToGallery = (images) => {
      images.forEach((imageUrl) => {
        const newImage = new Image();
        newImage.src = imageUrl;
        newImage.classList.add("item");
        newImage.alt = "image";
        galleryImages.appendChild(newImage);
        addImageClickListener(newImage);
        newImage.addEventListener("load", () => msnry.recalculate(true));
      });

      msnry.recalculate(true);
    };

    addImagesToGallery(newImages);
    expandButton.classList.add("d-none");
  });
});
