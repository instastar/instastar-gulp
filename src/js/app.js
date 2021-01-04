function addUser(id, cont) {
   $.instagramFeed({
      'username': id, //Имя пользователя
      'container': "#" + cont, //Контейнер для изображений
      'display_profile': true, //Отображение профиля
      'display_biography': false, //Отображение биографии
      'display_gallery': true, //Отображение галереи
      'styling': true, //Стандартные стили библиотеки
      'items': 3, //Количество изображений в галереи
      'items_per_row': 4, //Количество изображений в ряд
      'margin': 0.5 //Отступ между изображениями
   });
}

(function ($) {
   $(window).on('load', function () {
      addUser('_tolendiev_', 'galym')
      addUser('nursila_003', 'nurs')
      addUser('zhasulanankenov', 'zhas')
      addUser('iluxa011', 'ilukha')
      addUser('sonya___770', 'indira')
   });
})(jQuery);