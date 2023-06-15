"use strict";
import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const imagesArray = galleryItems.map(
  (img) =>
    `<li class="gallery__li">
        <a class="gallery__item" href="${img.original}">
            <img
                class="gallery__image"
                src="${img.preview}" 
                alt="${img.description}"
            />
        </a>
     </li>`
);

gallery.insertAdjacentHTML("beforeend", imagesArray.join(""));

gallery.addEventListener("click", showBigImage);

function showBigImage(event) {
  //zablokować domyślne zachowanie
  event.preventDefault();
  // sprawdzanie czy kliknięcie jest na img
  //   if (event.target.nodeName !== "IMG") return;
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "top",
    captionDelay: 250,
  });
  console.log(event.target.alt);
}
