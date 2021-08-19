$(document).ready(function () {
  let currentFloor = 2; // переменная текущего этажа
  let floorPath = $(".home_image path"); // каждый отдельный этаж в svg
  let counterUp = $(".counter_up");
  let counterDown = $(".counter_down");

  //функция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
    currentFloor = $(this).attr('data-floor'); // получение значений текущего этажа
    $(".counter").text(currentFloor); // запись значения этажа в счетчик
  });

  counterUp.on("click", function () { // отслеживание клика по кнопке Вверх
    if (currentFloor < 18) { // проверка значения этажа с условием не более 18-ти
    currentFloor++; //увеличение на один этаж
    usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, 
    useGrouping: false}); // форматирование значения этажа в формате 0(значение этажа)
    $(".counter").text(usCurrentFloor);
    floorPath.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  counterDown.on('click', function () {
    if(currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, 
      useGrouping: false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor")
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  })
});