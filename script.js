function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}
function openNav() {
  document.getElementById("mySidebar").style.width = "250px"; /* Atur lebar sidebar */
  // Opsional: Jika ingin efek push content, tambahkan ini:
  // document.getElementById("main").style.marginLeft = "250px";
}

/* Fungsi untuk menutup sidebar */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0"; /* Atur lebar sidebar menjadi 0 (tertutup) */
  // Opsional: Jika ingin efek push content, tambahkan ini:
  // document.getElementById("main").style.marginLeft = "0";
}

// --- Image Slider Logic ---
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentSlide = 0;
let slideInterval = setInterval(showNextSlide, 5000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
  currentSlide = index;
}

function showNextSlide() {
  showSlide((currentSlide + 1) % slides.length);
}

function showPrevSlide() {
  showSlide((currentSlide - 1 + slides.length) % slides.length);
}

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(showNextSlide, 5000);
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    showNextSlide();
    resetInterval();
  });
}
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    showPrevSlide();
    resetInterval();
  });
}
showSlide(0);
