document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".container-slider");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentSlide = 0;

  // Array of image URLs for each slide
  const imageUrls = [
    "url('img/carousel-3.jpg')",
    "url('img/carousel-1.jpg')",
    "url('img/carousel-2.jpg')",
    // Add more image URLs for each slide as needed
  ];

  
  // Show slide function with background image update
  const showSlideImage = (slideIndex) => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(-${slideIndex * 100}%)`;
      if (index === slideIndex) {
        slide.style.backgroundImage = imageUrls[index];
      }
    });
  
    dots.forEach((dot) => dot.classList.remove("active"));

    dots[slideIndex].classList.add("active");
  };


  showSlideImage(currentSlide);

  

  const showSlide = (slideIndex) => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });

    dots.forEach((dot) => dot.classList.remove("active"));

    dots[slideIndex].classList.add("active");
  };

  showSlide(currentSlide);

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      currentSlide = index;
    });
  });
});

//   Sliders images
