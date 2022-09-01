const slider = document.querySelector('.slider');
const imgContainer = document.querySelector('.img-container');
const pagination = document.querySelectorAll('.pagination span');
const caption = document.querySelector('.caption');
const captionText = document.querySelector('.caption h2');

/* Captions for the slider images */
const captions = [
   "City of Dubai",
   "The Swiss Alps",
   "Sahara Dunes"
];

/* slide function with id parameter */

function slide(id) {
   /* Moves the image container to the left */
   imgContainer.style.left = -100 * id + "%";
   /* Loops through all pagination buttons */
   pagination.forEach(pag => {
      /* Removes active class from all pagination buttons */
      pag.classList.remove('active');
   });
   /* Adds active class to clicked pagination button */
   pagination[id].classList.add('active');
   /* Caption animation */
   caption.style.animation = "textChange 1s ease-in-out";
   /* Removes caption animation after 1s so it can be added again */
   setTimeout(() => {
      caption.style.animation = "none";
   }, 1000);
   /* Changes the caption text when its out of sight in the middle of the animation */
   setTimeout(() => {
      captionText.innerText = captions[id];
   }, 500);
}

/* Interval for automatic slide */
let interval = setInterval(autoSlide, 4000);
/* Current image id to keep track of it */
let imgId = 1;
/* Automatic slide function */
function autoSlide() {
   /* If the id is higher than the number of pagination buttons, it will revert back to the first image */
   if (imgId > pagination.length - 1) {
      imgId = 0;
   }
   /* Calls the slide function */
   slide(imgId);
   /* Increments the image ID */
   imgId++;
}

/* Loops through the pagination */
for (let i = 0; i < pagination.length; i++) {
   /* Click events for the pagination buttons */
   pagination[i].addEventListener('click', () => {
      /* clears the atuo slide interval */
      clearInterval(interval);
      /* Calls the slide function */
      slide(i);
      /* Sets the image ID to the next image */
      imgId = i + 1;
      /* Reset the auto slide interval */
      interval = setInterval(autoSlide, 4000);
   });
}