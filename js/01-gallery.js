import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';

// const basicLightbox = require('basiclightbox');
// import * as basicLightbox from 'basiclightbox';

const refs = {
  divGallery:  document.querySelector('.gallery'),
};

const galleryItemCreate = 
  galleryItems.map(({ preview, original, description }) => {

  const divRef = document.createElement('div');
  divRef.classList.add('gallery__item');
  
  const aRef = document.createElement('a');
  aRef.classList.add('gallery__link');
  aRef.href = original;
  aRef.alt = description;

  const imgRef = document.createElement('img');
  imgRef.classList.add('gallery__image');
  imgRef.src = preview;
  imgRef.dataset.source = original;
  imgRef.alt = description;

  aRef.append(imgRef);
  divRef.append(aRef);

  return divRef;
});

refs.divGallery.append(...galleryItemCreate);


refs.divGallery.addEventListener('click', showOriginalImg);

function showOriginalImg(evt) {
  evt.preventDefault();
  if (!(evt.target.nodeName === "IMG"))  return;

  const instance = basicLightbox.create(`<img src="` + evt.target.dataset.source + `">`);

  instance.show();
}; 