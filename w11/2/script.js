// Находим необходимые элементы DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Функция для создания новой задачи
function createTask() {
  const taskText = taskInput.value.trim();

  // Проверяем, что поле не пустое
  if (taskText === "") {
    alert("Введите задачу!");
    return;
  }

  // Создаём новый элемент списка
  const newTask = document.createElement("li");
  newTask.textContent = taskText;

  // Добавляем обработчик клика для переключения состояния задачи
  newTask.addEventListener("click", checkTask);

  // Добавляем новую задачу в список
  taskList.appendChild(newTask);

  // Очищаем поле ввода
  taskInput.value = "";
}

// Функция для переключения состояния выполнения задачи
function checkTask(event) {
  event.target.classList.toggle("completed");
}

// Добавляем обработчики событий
addTaskButton.addEventListener("click", createTask);
