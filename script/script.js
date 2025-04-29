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
