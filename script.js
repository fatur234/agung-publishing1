// Add smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add scroll event for navbar background change
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

let slideIndex = 1;
showSlides(slideIndex);

// Fungsi untuk mengubah slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Fungsi untuk menunjukkan slide tertentu
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Sembunyikan semua slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Hilangkan status aktif dari semua titik
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Tampilkan slide aktif dan titik aktif
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Fungsi untuk memeriksa apakah elemen ada di dalam viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
  );
}

// Fungsi untuk menambahkan kelas "show" saat elemen di-scroll ke dalam viewport
function handleScrollAnimation() {
  const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
  elements.forEach(element => {
      if (isInViewport(element)) {
          element.classList.add('show');
      }
  });
}

// Menjalankan fungsi saat halaman di-scroll
window.addEventListener('scroll', handleScrollAnimation);

// Memeriksa saat pertama kali halaman dimuat
document.addEventListener('DOMContentLoaded', handleScrollAnimation);

function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress');

  progressBars.forEach(bar => {
      const value = bar.getAttribute('style').match(/width:\s?(\d+)%/)[1];
      bar.style.width = 0; // Mulai dari 0

      setTimeout(() => {
          bar.style.width = `${value}%`; // Pindah ke nilai asli
      }, 100);
  });
}

window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('.skills-section');
  const rect = skillsSection.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      animateProgressBars();
  }
});

function animateTestimonials() {
  const testimonials = document.querySelectorAll('.fade-in');
  testimonials.forEach(testimonial => {
      const rect = testimonial.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          testimonial.classList.add('show');
      }
  });
}

window.addEventListener('scroll', animateTestimonials);
document.addEventListener('DOMContentLoaded', animateTestimonials);

// Fungsi untuk menampilkan popup setelah beberapa detik
function showPopup() {
  document.getElementById("promoPopup").style.display = "flex";
}

// Menjalankan fungsi setelah 5 detik
setTimeout(showPopup, 5000);

// Fungsi untuk menutup popup
function closePopup() {
  document.getElementById("promoPopup").style.display = "none";
}

// Data detail keterampilan
const skillDetails = {
  'copywriting': {
      title: 'Copywriting',
      description: 'Creating compelling and persuasive copy to promote products, services, or ideas effectively.'
  },
  'seo-writing': {
      title: 'SEO Writing',
      description: 'Writing optimized content that improves search engine ranking while engaging the audience.'
  },
  'creative-writing': {
      title: 'Creative Writing',
      description: 'Crafting imaginative and original content, including fiction, poetry, and narrative essays.'
  }
};

// Fungsi untuk menampilkan detail skill
function showSkillDetail(skill) {
  const detail = skillDetails[skill];
  document.getElementById('skillTitle').textContent = detail.title;
  document.getElementById('skillDescription').textContent = detail.description;
  document.getElementById('skillDetailPopup').style.display = 'flex';
}

// Fungsi untuk menutup popup
function closeSkillDetail() {
  document.getElementById('skillDetailPopup').style.display = 'none';
}

function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector('.toggle-icon');

  // Tampilkan atau sembunyikan jawaban
  if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.textContent = "+";
  } else {
      answer.style.display = "block";
      icon.textContent = "-";
  }
}
