import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// const galleryCreate = (galleryItems) => {

const galleryItem = galleryItems.map(({ preview, original, description }) => {
  console.log(preview, original, description)
  const divRef = document.createElement('div');
  divRef.classList.add('gallery__item');
  console.log(divRef);

  const aRef = document.createElement('a');
  aRef.classList.add('gallery__link');
  aRef.href = original;
  aRef.alt = 'originalPhoto';

  const imgPreviewRef = document.createElement('img');
  imgPreviewRef.classList.add('gallery__image');
  imgPreviewRef.src = preview;
  imgPreviewRef.dataset.source = original;
  imgPreviewRef.alt = description;



});
console.log(galleryItem);


/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description" */



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

