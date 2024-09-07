// JavaScript to handle image navigation
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
];

let currentIndex = 0;

const currentImage = document.getElementById('currentImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Function to update the image
function updateImage(index) {
    currentImage.src = images[index];
}

// Next button event listener
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
});

// Previous button event listener
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
});
