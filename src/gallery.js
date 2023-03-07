import images from './photos.js';
import PhotoSwipeLightbox from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.6/photoswipe-lightbox.esm.min.js';

const options = {
  gallery: '#gallery--responsive-images',
  children: 'a',
  pswpModule: () => import('https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.6/photoswipe.esm.min.js')
  
};
const lightbox = new PhotoSwipeLightbox(options);


lightbox.init();


function generateGallery() {
  const gallery = document.getElementById("gallery");

  for (const image of images) {
    const aElement = document.createElement("a");
    aElement.href = image.url;
    aElement.setAttribute("data-pswp-width", 1000);
    aElement.setAttribute("data-pswp-height", 1000);
    aElement.setAttribute("data-cropped", true);
    aElement.target = "_blank";


    const imgElement = document.createElement("img");
    imgElement.src = image.url;
    imgElement.alt = image.caption;
    imgElement.classList.add("img-fluid");
    imgElement.classList.add("img-style");

    aElement.appendChild(imgElement);

    const colElement = document.createElement("div");
    colElement.appendChild(aElement);
    colElement.classList.add("col-6");
    colElement.classList.add("col-md-3");

    gallery.appendChild(colElement);
  }
}
 export default generateGallery();