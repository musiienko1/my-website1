// script.js — простий JS для модального вікна та форми
document.addEventListener('DOMContentLoaded', function(){
  const openBtn = document.getElementById('openModal');
  const closeBtn = document.getElementById('closeModal');
  const modal = document.getElementById('modal');
  const backdrop = document.getElementById('backdrop');
  const form = document.getElementById('contactForm');
  const yearSpan = document.getElementById('year');

  yearSpan.textContent = new Date().getFullYear();

  function showModal(){
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function hideModal(){
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', showModal);
  closeBtn.addEventListener('click', hideModal);
  backdrop.addEventListener('click', hideModal);
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') hideModal();
  });

  form.addEventListener('submit', function(e){
    e.preventDefault();
    // Тут можна підключити реальний бекенд або сервіс розсилок.
    alert('Дякую! Повідомлення надіслано (демо).');
    form.reset();
    hideModal();
  });
});
