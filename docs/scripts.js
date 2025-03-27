// Carrossel de Imagens
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transition = "transform 0.5s ease";
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Transição automática a cada 5 segundos
setInterval(() => {
    changeImage(1); // Mudar para a próxima imagem
}, 5000); // Muda a imagem a cada 5 segundos

// Enviar Formulário de Contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('form-message').style.display = 'block';
});

// Função para copiar a chave PIX
function copyPixKey() {
    const pixKey = document.getElementById('pix-key').textContent;
    navigator.clipboard.writeText(pixKey).then(function() {
        alert("Chave PIX copiada para a área de transferência!");
    });
}

// Função para alternar o modo noturno
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const modeToggleButton = document.getElementById("mode-toggle");
  if (document.body.classList.contains("dark-mode")) {
    modeToggleButton.textContent = "Modo Claro";
  } else {
    modeToggleButton.textContent = "Modo Noturno";
  }
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const topOffset = targetSection.offsetTop - 50; // Ajuste para evitar sobreposição com cabeçalho
                window.scrollTo({
                    top: topOffset,
                    behavior: "smooth" // Faz o scroll suave
                });
            }
        });
    });
});

