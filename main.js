document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    const changeSlide = () => {
        slides[currentIndex].classList.remove('active');

        currentIndex++;

        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        slides[currentIndex].classList.add('active');
    };

    setInterval(changeSlide, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
    // Slider 1
    let slideIndex1 = 1;
    showSlides(slideIndex1);

    function plusSlides1(n) {
        showSlides(slideIndex1 += n);
    }

    function currentSlide1(n) {
        showSlides(slideIndex1 = n);
    }

    // Slider 2
    let slideIndex2 = 1;
    showSlides2(slideIndex2);

    function plusSlides2(n) {
        showSlides2(slideIndex2 += n);
    }

    function currentSlide2(n) {
        showSlides2(slideIndex2 = n);
    }

    function showSlides(n) {
        showSlidesCommon(n, ".slider-2 .mySlides", ".slider-2 .quadrate");
    }

    function showSlides2(n) {
        showSlidesCommon(n, ".slider-3 .mySlides", ".slider-3 .quadrate");
    }

    function showSlidesCommon(n, slidesSelector, quadratesSelector) {
        let i;
        let slides = document.querySelectorAll(slidesSelector);
        let quadrates = document.querySelectorAll(quadratesSelector);

        if (n > slides.length) n = 1;
        if (n < 1) n = slides.length;

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < quadrates.length; i++) {
            quadrates[i].classList.remove("active");
        }

        slides[n - 1].style.display = "block";
        quadrates[n - 1].classList.add("active");
    }

    // Eventos para los botones de flecha
    document.querySelector(".slider-2 .prev").addEventListener("click", function () {
        plusSlides1(-1);
    });

    document.querySelector(".slider-2 .next").addEventListener("click", function () {
        plusSlides1(1);
    });

    document.querySelector(".slider-3 .prev").addEventListener("click", function () {
        plusSlides2(-1);
    });

    document.querySelector(".slider-3 .next").addEventListener("click", function () {
        plusSlides2(1);
    });
});
