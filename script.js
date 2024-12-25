const links = document.querySelectorAll('#linkList li a');

links.forEach(link => {
  link.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#0056b3';
    this.style.transform = 'translateY(-5px)'; // Поднимаем ссылку
    this.style.transition = 'background-color 0.3s, transform 0.2s'; // Добавляем плавный переход
  });

  link.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#212121'; // Возвращаем первоначальный цвет
    this.style.transform = 'translateY(0)'; // Возвращаем на место
    this.style.transition = 'background-color 0.3s, transform 0.2s'; // Добавляем плавный переход
  });
});
