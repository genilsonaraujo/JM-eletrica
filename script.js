// Menu responsivo

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector(".menu-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      document.querySelector(".nav ul").classList.toggle("active");
    });
 }})

document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav ul").classList.toggle("active");
});


    function toggleMenu() {
      const menu = document.getElementById('menuLateral');
      menu.classList.toggle('ativo');
    }

    const links = document.querySelectorAll('.menu-lateral a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('menuLateral').classList.remove('ativo');
      });
    });

    document.addEventListener('click', function (e) {
      const menu = document.getElementById('menuLateral');
      const toggle = document.querySelector('.menu-toggle');
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('ativo');
      }
    });


    // ====== BOTÃO WHATSAPP ======
    document.querySelectorAll('.btn-whatsapp').forEach(button => {
  button.addEventListener('click', function () {
    const card = this.closest('.cardi');
    if (!card) return; // evita erro se card não existir

    const nome = card.dataset.nome || 'Serviço';
    const codigo = card.dataset.codigo || '---';
    const obsElement = card.querySelector('.obs');
    const obs = obsElement ? obsElement.value || 'Nenhuma' : 'Nenhuma';

    const numero = '5511982299304';
    const mensagem = `Olá! Gostaria de fazer um orçamento:\n\n⚡ *${nome}* (Código: ${codigo})\n📝 Observações: ${obs}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
  });
});

    // ====== CARROSSEL ======
    const carrosse = document.querySelector('.carrosse');
    if (carrosse) {
    let isDown = false;
    let startX;
    let scrollLeft;

    carrosse.addEventListener('mousedown', (e) => {
        isDown = true;
        carrosse.classList.add('active');
        startX = e.pageX - carrosse.offsetLeft;
        scrollLeft = carrosse.scrollLeft;
    });

    carrosse.addEventListener('mouseleave', () => {
        isDown = false;
        carrosse.classList.remove('active');
    });

    carrosse.addEventListener('mouseup', () => {
        isDown = false;
        carrosse.classList.remove('active');
    });

    carrosse.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carrosse.offsetLeft;
        const walk = (x - startX) * 1.5; // velocidade do arraste
        carrosse.scrollLeft = scrollLeft - walk;
    });
    }
