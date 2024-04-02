import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector("ul.gallery");

const createGalleryItem = (image) => {
  return `<li class="gallery__item"><a class="gallery__link" href="${image.original}"> <img class="gallery__image" src="${image.preview}" alt="${image.description}" /></a></li>`;
};

const galleryString = galleryItems.map(createGalleryItem).join("");

gallery.insertAdjacentHTML("afterbegin", galleryString);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
