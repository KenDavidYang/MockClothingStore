let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

const moveCarousel = (direction) => {

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex > totalImages-1) {
        currentIndex = 0;
    }

    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[currentIndex].classList.add('active');


}

const carouselItems = document.querySelector(".carousel-images");
const indicators = document.querySelectorAll(".indicator");
const items = document.querySelectorAll(".carousel-images img");

const jumpCarousel = (index) => {


    indicators[currentIndex].classList.add("active");

    carouselItems.style.transform = `translate(-${index * 100}%)`;
    
    indicators.forEach( indicator => indicator.classList.remove("active"));
    indicators[index].classList.add("active");

    currentIndex = index;

}

indicators.forEach( indicator => {
    indicator.addEventListener("click", (event) => {
        const index = parseInt(event.target.getAttribute("data-index"));
        jumpCarousel(index);
    });
})

setInterval(() => {
    moveCarousel(1);
},3000)