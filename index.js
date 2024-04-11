

// Navbar

const home = document.querySelector("#home");

window.addEventListener("scroll", function() {

    const headers = document.querySelectorAll(".header");

    headers.forEach((header) => {
        header.classList.toggle("header-fixed", window.scrollY > 700);
    });
    
    // homeDiv.classList.toggle("home-fixed", window.scrollY > 800);
    
});



const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const bars = document.querySelector(".fa-bars");
const dropdownMenu = document.querySelector(".dropdown-m");

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle("open");
    bars.classList.toggle("fa-bars-staggered");
}


const navLinks = document.querySelectorAll(".nav-links");

var navbar = function(manual) {
    // Handle button navigation
    navLinks.forEach((navLink, i) => {
        if (i === manual) {
            navLink.classList.add("active");
        } else {
            navLink.classList.remove("active");
        }
    });
}


navLinks.forEach((navLink, i) => {
    navLink.addEventListener("click", () => {
        navbar(i); // Pass the index of the clicked button to sliderNav
    });
});
// Home

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const texts = document.querySelectorAll(".content")
let currentSlideIndex = 0; // Keep track of the current slide index
let autoSlideInterval; // Variable to hold the interval timer

var sliderNav = function(manual) {
    // Handle button navigation
    btns.forEach((btn, i) => {
        if (i === manual) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Handle slide navigation
    slides.forEach((slide, i) => {
        if (i === manual) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });

    // Handle text navigation
    texts.forEach((text, i) => {
        if (i === manual) {
            text.classList.add("active");
        } else {
            text.classList.remove("active");
        }
    });
}

var autoSlide = function() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    sliderNav(currentSlideIndex);
}

// Set up auto-slide with a 3-second interval (adjust as needed)
autoSlideInterval = setInterval(autoSlide, 8000);

// Pause auto-slide on button click
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        clearInterval(autoSlideInterval); // Pause auto-slide
        sliderNav(i);
        
        // Restart auto-slide after a 5-second pause (adjust as needed)
        setTimeout(() => {
            autoSlideInterval = setInterval(autoSlide, 8000);
        }, 5000);
    });
});


// Countdown Section

var countDownDate = new Date("May 17, 2024 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
},1000);


// Carousel Section

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlides(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-content");
    var dots = document.getElementsByClassName("gallery-img");
    var gallerys = document.querySelectorAll(".gallery-wrapper");
    var showCarousel = document.getElementById("gallery-carousel");
    var closeBtns = document.querySelectorAll(".close-btn")

    gallerys.forEach((gallery) => {
        gallery.addEventListener("click", () => {
            showCarousel.style.display = "block";
        });
    });

    closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener("click", () => {
            showCarousel.style.display = "none";
        });
    });

    if (n > slides.length) { 
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        
    }
    for ( i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        
    }
    slides[slideIndex - 1].style.opacity = "1";
    dots[slideIndex - 1].className += " active";
}


// // Phone View

// function checkScreenSize() {
//     const slideImage = document.querySelector(".img-slide");
//     if (window.innerWidth <= 1100) {
//         slideImage.src = './images/photo_2024-03-19_09-18-39.jpg';
//     } else {
//         slideImage.src = './images/img1.jpg';
//     }
// }


// checkScreenSize();

// window.addEventListener('resize', checkScreenSize);


 // Back to top section



  
const backToTopButton = document.querySelector(".up");

window.addEventListener('scroll', function (){
   backToTopButton.classList.toggle("active" , window.scrollY > 150)
})

backToTopButton.addEventListener("click", function () {
   document.documentElement.scrollTo({
       top: 0,
       behavior: 'smooth',
   })
})


// Loader Section

window.addEventListener("load", () => {
    const preloaders = document.querySelectorAll(".preloader");
    
    preloaders.forEach((preloader) => {
        preloader.classList.add("preloader--hidden");
        preloader.addEventListener("transitionend", () => {
            document.body.removeChild(preloader);
        });
    });
});


