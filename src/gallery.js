import PhotoSwipeLightbox from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.6/photoswipe-lightbox.esm.min.js';
import images from './photos.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--getting-started',
  children: 'a',
  pswpModule: () => import('https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.6/photoswipe.esm.min.js')
});
lightbox.init();



function generateGallery() {
  const gallery = document.getElementById("gallery");

  for (const image of images) {
    const aElement = document.createElement("a");
    aElement.href = image.url;
    aElement.setAttribute("data-pswp-width", 1669);
    aElement.setAttribute("data-pswp-height", 2500);
    aElement.target = "_blank";


    const imgElement = document.createElement("img");
    imgElement.src = image.url;
    imgElement.alt = image.caption;
    imgElement.classList.add("img-fluid");

    aElement.appendChild(imgElement);

    const colElement = document.createElement("div");
    colElement.appendChild(aElement);
    colElement.classList.add("col-2");

    gallery.appendChild(colElement);
  }
}
 export default generateGallery();