document.querySelectorAll('.experience-card').forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    });
  
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    });
  });
  
  document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = '#f0f0f0';
    });
  
    item.addEventListener('mouseout', () => {
      item.style.backgroundColor = 'transparent';
    });
  });
  