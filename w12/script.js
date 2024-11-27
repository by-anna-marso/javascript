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

// Добавление комментария
function addComment() {
  const nameInput = document.getElementById("name");
  const avatarInput = document.getElementById("avatar");
  const messageInput = document.getElementById("message");

  let name = nameInput.value.trim();
  let avatar = avatarInput.value.trim();
  let message = checkSpam(messageInput.value.trim());

  if (!name) {
    alert("Please enter a name!");
    return;
  }

  if (!message) {
    alert("Please enter a message!");
    return;
  }

  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  const commentsContainer = document.getElementById("comments");

  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");

  const avatarImg = avatar
    ? `<img src="${avatar}" alt="Avatar">`
    : `<img src="https://via.placeholder.com/40" alt="Default Avatar">`;

  commentDiv.innerHTML = `
    ${avatarImg}
    <p><strong>${name}:</strong> ${message}</p>
  `;

  commentsContainer.appendChild(commentDiv);

  nameInput.value = "";
  avatarInput.value = "";
  messageInput.value = "";
}

// Установка языка по умолчанию
document.addEventListener("DOMContentLoaded", () => {
  switchLanguage("fr"); // Язык по умолчанию - французский
});
