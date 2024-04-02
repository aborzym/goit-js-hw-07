import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector("ul.gallery");

//stworzyc funkcję zwracającą pojedynczy obraz w galerii

const createGalleryItem = (image) => {
  return `<li class="gallery__item"><a class="gallery__link" href=""> <img class="gallery__image" src="${image.preview}" alt="${image.description}" data-source="${image.original}" /></a></li>`;
};

const galleryString = galleryItems.map(createGalleryItem).join("");

gallery.insertAdjacentHTML("afterbegin", galleryString);

gallery.addEventListener("click", (ev) => {
  ev.preventDefault();
  const bigImage = ev.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${bigImage}">`);
  instance.show();

  //zamknięcie na escape
  const closeLightboxOnEscape = (event) => {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeLightboxOnEscape);
    }
  };
  document.addEventListener("keydown", closeLightboxOnEscape);
});
