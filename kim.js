
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
        
    const href = this.getAttribute('href');

  
    document.querySelector(href).scrollIntoView({
       behavior: 'smooth'
    });
  });
});
   const cards = document.querySelectorAll('.info-grid div');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.3s ease-out';
    
     card.style.transform = 'scale(1.1)';
 
  });

  card.addEventListener('mouseleave', () => {
    
    card.style.transition = 'transform 0.3s ease-out';
    card.style.transform = 'scale(1)';
  });
});
