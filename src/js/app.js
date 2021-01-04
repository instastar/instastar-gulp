function addUser(id, cont) {
   $.instagramFeed({
      'username': id, //Имя пользователя
      'container': "#" + cont, //Контейнер для изображений
      'display_profile': true, //Отображение профиля
      'display_biography': false, //Отображение биографии
      'display_gallery': true, //Отображение галереи
      'styling': false, //Стандартные стили библиотеки
      'items': 3, //Количество изображений в галереи
      'items_per_row': 4, //Количество изображений в ряд
      'margin': 0.5 //Отступ между изображениями
  });
}

(function ($) {
   $(window).on('load', function () {
      addUser('ereke_007', 'ereke')
   });
})(jQuery);