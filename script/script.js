document.getElementById('about-link').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('habi-link').addEventListener('click', () => {
  document.getElementById('habilities').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('projeto-link').addEventListener('click', () => {
  document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('contato-link').addEventListener('click', () => {
  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
});
const bandejas = document.querySelectorAll('.bandeja');

bandejas.forEach(bandeja => {
  bandeja.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = bandeja.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = ((y / height) - 0.5) * 20;
    const rotateY = ((x / width) - 0.5) * -20;
    bandeja.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  bandeja.addEventListener('mouseleave', () => {
    bandeja.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  });
});

const text = "Caio Carvalho.";
    const typedTextSpan = document.getElementById("typed-text");
    let index = 0;
    let started = false;

    function typeLetter() {
      if (index < text.length) {
        typedTextSpan.textContent += text.charAt(index);
        index++;
        setTimeout(typeLetter, 50);
      } else {
        setTimeout(deleteLetter, 3000); 
      }
    }

    function deleteLetter() {
      if (index > 0) {
        typedTextSpan.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(deleteLetter, 100);
      } else {
        setTimeout(typeLetter, 500);
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          started = true;
          typeLetter();
        }
      });
    }, {
      threshold: 0.5
    });

    observer.observe(typedTextSpan);