let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');

if (menu) {
    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        if (navbar) navbar.classList.toggle('active');
    }
}


window.onscroll = () => {
    if (menu) menu.classList.remove('fa-times');
    if (navbar) navbar.classList.remove('active');

    if (header) {
        if(window.scrollY > 0){
            header.classList.add('active');
        } else{
            header.classList.remove('active');
        }
    }
}

/* --- LIGHTBOX GALLERY --- */

document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.getElementById("myLightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const images = document.querySelectorAll(".photo-gallery img");
    const closeBtn = document.querySelector(".close-btn");

    
    if (!lightbox || !lightboxImg) return; 

    // click gallery image
    images.forEach(img => {
        img.addEventListener("click", function() {
            lightbox.style.display = "flex"; 
            lightboxImg.src = this.src;      
        });
    });

    // close when user clicks the "X"
    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            lightbox.style.display = "none";
        });
    }

    // close when user clicks outside the image
    lightbox.addEventListener("click", function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // close when user clicks the esc button on the keyboard
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && lightbox.style.display === "flex") {
            lightbox.style.display = "none";
        }
    });
});


// Auto update copyright year
document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Initialize Reviews Swiper
document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelector(".review-slider")) {
        var swiper = new Swiper(".review-slider", {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
            },
        });
    }
});

