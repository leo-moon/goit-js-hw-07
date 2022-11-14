import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
  divGallery:  document.querySelector('.gallery'),
};

const galleryItemCreate = galleryItems.map( ({ preview, original, description }) => {
  // const divRef = document.createElement('div');
  // divRef.classList.add('gallery__item');
  
  const aRef = document.createElement('a');
  aRef.classList.add('gallery__item');
  aRef.href = original;
  // aRef.alt = description;
  aRef.title = 'swreh';

  const imgRef = document.createElement('img');
  imgRef.classList.add('gallery__image');
  imgRef.src = preview;
  // imgRef.dataset.source = original;
  imgRef.alt = description;

  aRef.append(imgRef);
  // divRef.append(aRef);

  return aRef;
});

refs.divGallery.append(...galleryItemCreate);

refs.divGallery.addEventListener('click', showOriginalImg);

function showOriginalImg(e) {
  e.preventDefault();
  console.log(e);

  let galleryShow = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
  });
};
