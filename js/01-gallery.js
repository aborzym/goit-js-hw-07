"use strict";
import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const imagesArray = galleryItems.map(
  (img) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="#">
            <img
                class="gallery__image"
                src="${img.preview}" 
                data-source="${img.original}" 
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
  if (event.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`,
    {
      onShow: () => {
        // console.log(`showed ${event.target.alt}`);
        document.addEventListener("keydown", listenEscapeKey);
      },
      onClose: () => {
        // console.log("closed");
        document.removeEventListener("keydown", listenEscapeKey);
      },
    }
  );
  instance.show();

  function listenEscapeKey(event) {
    if (event.code === "Escape") instance.close();
  }
}
