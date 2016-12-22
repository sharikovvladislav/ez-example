/**
 * Начальное состояние приложения
 */
var state = {
  checkboxModel: {
    cb1: false,
    cb2: false,
    cb3: true
  }
};

/**
 * Имитируем получение данных с сервера
 */
setTimeout(function () {
  Object.assign(state, {
    checkboxModel: {
      cb1: false,
      cb2: true,
      cb3: false
    }
  });
  redraw();
}, 2000);

/**
 * Обработчик смены значения в комбобоксах
 */
$('input[type="checkbox"]').change('check', function () {
  var newCheckBoxValue = $(this).prop('checked');
  console.log('update data in the database, make request, save ', $(this).data('model'), ', new value is: ', newCheckBoxValue);
});

/**
 * Функция для перерисовки состояния комбобоксов после получения данных
 */
function redraw () {
  $('input[type="checkbox"]').each(function (i, element) {
    var jElement = $(element),
      modelName = jElement.data('model');
    $(element).prop('checked', state.checkboxModel[modelName]);
  });
}