//sambutan//
alert('Selamat datang di Beat Site!')

// Efek header dan navigasi//
document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("scroll", function() {
        const parallax = document.querySelector(".parallax");
        let scrollPosition = window.scrollY;
        parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
    });
});

//Untuk Navigasi//
document.querySelector('.burger').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }else {
        sidebar.classList.add('active');
    }
});

//Untuk slide gambar//
let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            const slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 6000); // Ganti 2000 dengan interval perpindahan slide dalam milidetik
        }