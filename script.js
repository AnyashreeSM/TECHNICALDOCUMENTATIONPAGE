// Smooth scroll for nav links & active highlight
document.querySelectorAll('#navbar a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Highlight active link
    document.querySelectorAll('#navbar a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});

// Active section highlight on scroll
const sections = document.querySelectorAll('.main-section');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (pageYOffset >= sectionTop) current = section.getAttribute('id');
  });
  document.querySelectorAll('#navbar a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = (window.scrollY > 300) ? "block" : "none";
};
scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// GSAP scroll animations
gsap.registerPlugin(ScrollTrigger);
gsap.from(".main-section", {
  scrollTrigger: {
    trigger: ".main-section",
    start: "top 85%",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});
