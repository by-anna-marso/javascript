document.getElementById("calculateBtn").addEventListener("click", function () {
  const birthdateInput = document.getElementById("birthdate");
  const errorMessage = document.getElementById("errorMessage");
  const daysLeftText = document.getElementById("daysLeft");

  const birthdate = new Date(birthdateInput.value);
  const currentDate = new Date();

  // Проверка, введена ли дата
  if (!birthdateInput.value) {
    errorMessage.style.display = "block";
    daysLeftText.textContent = "";
    return;
  }

  // Скрытие сообщения об ошибке, если дата введена
  errorMessage.style.display = "none";

  // Устанавливаем день рождения на текущий год
  birthdate.setFullYear(currentDate.getFullYear());

  // Если день рождения уже был в этом году, устанавливаем его на следующий год
  if (birthdate < currentDate) {
    birthdate.setFullYear(currentDate.getFullYear() + 1);
  }

  // Вычисляем количество дней до дня рождения
  const timeDiff = birthdate - currentDate;
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Определяем склонение слова "день"
  let dayWord = "дней";
  if (daysLeft % 10 === 1 && daysLeft % 100 !== 11) {
    dayWord = "день";
  } else if (
    daysLeft % 10 >= 2 &&
    daysLeft % 10 <= 4 &&
    (daysLeft % 100 < 10 || daysLeft % 100 >= 20)
  ) {
    dayWord = "дня";
  }

  // Отображаем результат
  daysLeftText.textContent = `До вашего дня рождения осталось ${daysLeft} ${dayWord}.`;
});

// Скрытие сообщения об ошибке при изменении даты
document.getElementById("birthdate").addEventListener("input", function () {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.style.display = "none";
});
