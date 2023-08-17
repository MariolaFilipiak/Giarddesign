document.addEventListener("DOMContentLoaded", () => {
  const expandButton = document.getElementById("expandButton");
  const gradientOverlay = document.querySelector(".gradient-overlay");
  const galleryImages = document.querySelectorAll(".gallery-img img");
  const modalImage = document.getElementById("modalImage");
  const modal = new bootstrap.Modal(document.getElementById("imageModal"));

  const showImageInModal = (image) => {
    modalImage.src = image.src;
    modal.show();
  };

  expandButton.addEventListener("click", () => {
    gradientOverlay.style.display = "none";
    galleryImages.forEach((image) => {
      image.style.display = "block";
      image.addEventListener("click", () => showImageInModal(image));
    });
    expandButton.style.display = "none";

    const newImages = [
      "https://images.pexels.com/photos/11678318/pexels-photo-11678318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6829876/pexels-photo-6829876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/788485/pexels-photo-788485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/8838614/pexels-photo-8838614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1652966/pexels-photo-1652966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1065874/pexels-photo-1065874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

    const galleryRow = document.querySelector(".gallery-img.row");
    newImages.forEach((imageSrc) => {
      const newCol = document.createElement("div");
      newCol.className = "col-lg-4 mb-4 mb-lg-0";
      const newImage = document.createElement("img");
      newImage.src = imageSrc;
      newImage.className = "w-100 mb-4";
      newImage.addEventListener("click", () => showImageInModal(newImage));
      newCol.appendChild(newImage);
      galleryRow.appendChild(newCol);
    });
  });
});
