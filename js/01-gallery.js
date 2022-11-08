import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// const galleryCreate = (galleryItems) => {

const galleryItem = galleryItems.map(({ preview, original, description }) => {
  console.log(preview, original, description)
  const divRef = document.createElement('div');
  divRef.classList.add('.gallery__item');

  const imgPreviewRef = document.createElement('img');
  imgPreviewRef.classList.add('.gallery__image');
  imgPreviewRef.url = preview;
  imgPreviewRef.alt = 'previewPhoto';

  const imgMainRef = document.createElement('img');
  imgMainRef.classList.add('.gallery__image');
  imgMainRef.url = original;
  imgMainRef.alt = 'originalPhoto';

  
});
console.log(galleryItem);


// export const galleryItems = [
//     preview:
//     original:
//     description:

// .gallery 
// 
// .gallery__image:hover
//  
// .gallery__link
// .gallery__link:hover 

