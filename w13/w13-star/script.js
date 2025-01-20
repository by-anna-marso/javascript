// Переводы текста
const translations = {
  en: {
    "comments-title": "Comments",
    "add-comment-title": "Add a comment",
    "name-placeholder": "Enter your name",
    "avatar-placeholder": "Link to avatar",
    "message-placeholder": "Enter your message",
    "publish-button": "Publish",
  },
  fr: {
    "comments-title": "Commentaires",
    "add-comment-title": "Ajoutez un commentaire",
    "name-placeholder": "Entrez votre nom",
    "avatar-placeholder": "Lien vers l'avatar",
    "message-placeholder": "Entrez votre message",
    "publish-button": "Publier",
  },
  ru: {
    "comments-title": "Комментарии",
    "add-comment-title": "Добавить комментарий",
    "name-placeholder": "Введите ваше имя",
    "avatar-placeholder": "Ссылка на аватар",
    "message-placeholder": "Введите ваше сообщение",
    "publish-button": "Опубликовать",
  },
};

// Список стандартных аватаров
const defaultAvatars = [
  "https://via.placeholder.com/40/FF5733/FFFFFF?text=Avatar1",
  "https://via.placeholder.com/40/33FF57/FFFFFF?text=Avatar2",
  "https://via.placeholder.com/40/3357FF/FFFFFF?text=Avatar3",
  "https://via.placeholder.com/40/57FF33/FFFFFF?text=Avatar4",
  "https://via.placeholder.com/40/FF5733/FFFFFF?text=Avatar5",
];

// Функция для переключения языка
function switchLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });

  const placeholders = document.querySelectorAll("[data-lang-placeholder]");
  placeholders.forEach((el) => {
    const key = el.getAttribute("data-lang-placeholder");
    el.setAttribute("placeholder", translations[lang][key]);
  });
}

// Функция фильтрации спама
function checkSpam(str) {
  const spamWords = ["viagra", "xxx", "виагра", "ххх"];
  let result = str;

  spamWords.forEach((word) => {
    const regex = new RegExp(word, "gi");
    result = result.replace(regex, "***");
  });

  return result;
}

// Функция для получения случайного аватара
function getRandomAvatar() {
  const randomIndex = Math.floor(Math.random() * defaultAvatars.length);
  return defaultAvatars[randomIndex];
}

// Добавление комментария
function addComment() {
  const nameInput = document.getElementById("name");
  const avatarInput = document.getElementById("avatar");
  const messageInput = document.getElementById("message");
  const showNameCheckbox = document.getElementById("showName");

  let name = nameInput.value.trim();
  let avatar = avatarInput.value.trim();
  let message = checkSpam(messageInput.value.trim());

  // Если имя не указано, показываем 'username'
  if (!name) {
    name = "username";
  }

  // Если аватар не указан, показываем случайный
  if (!avatar) {
    avatar = getRandomAvatar();
  }

  // Если сообщение не указано, показываем предупреждение
  if (!message) {
    alert("Please enter a message!");
    return;
  }

  // Если чекбокс не установлен, скрываем имя
  if (!showNameCheckbox.checked) {
    name = "Anonymous";
  }

  // Получаем текущую дату и время
  const currentDate = new Date();
  const date = currentDate.toLocaleString();

  const commentsContainer = document.getElementById("comments");

  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");

  const avatarImg = `<img src="${avatar}" alt="Avatar">`;

  commentDiv.innerHTML = `
    ${avatarImg}
    <p><strong>${name}:</strong> ${message}</p>
    <p class="comment-time">${date}</p>
  `;

  commentsContainer.appendChild(commentDiv);

  // Очищаем поля ввода
  nameInput.value = "";
  avatarInput.value = "";
  messageInput.value = "";
  showNameCheckbox.checked = false; // Снимаем галочку с чекбокса
}

// Установка языка по умолчанию
document.addEventListener("DOMContentLoaded", () => {
  switchLanguage("fr"); // Язык по умолчанию - французский
});
