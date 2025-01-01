// Animar elementos quando eles entram na viewport.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".service-card").forEach((card) => {
  observer.observe(card);
});

// Tratamento de envio de formulários.
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  e.target.reset();
});
