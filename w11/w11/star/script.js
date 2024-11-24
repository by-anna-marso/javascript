// Список товаров в корзине
const products = [
  { name: "Футболка", price: 1500 },
  { name: "Джинсы", price: 3000 },
  { name: "Кроссовки", price: 5000 },
  { name: "Сумка", price: 2500 },
];

let isDiscountApplied = false; // Флаг, чтобы скидка применялась только один раз

// Элементы DOM
const cartItems = document.getElementById("cartItems");
const totalPriceElement = document.querySelector("#totalPrice span");
const applyDiscountButton = document.getElementById("applyDiscount");

// Функция для отображения товаров в корзине
function displayCart() {
  cartItems.innerHTML = ""; // Очищаем содержимое
  let total = 0;

  products.forEach((product) => {
    // Создаём элемент списка для каждого товара
    const li = document.createElement("li");
    li.innerHTML = `<span>${product.name}</span> <span>${product.price} ₽</span>`;
    cartItems.appendChild(li);

    // Считаем итоговую стоимость
    total += product.price;
  });

  // Обновляем итоговую стоимость на странице
  totalPriceElement.textContent = total;
}

// Функция для применения скидки
function applyDiscount() {
  if (isDiscountApplied) {
    alert("Скидка уже применена!");
    return;
  }

  // Применяем скидку 20% к каждому товару
  products.forEach((product) => {
    product.price = Math.round(product.price * 0.8); // Уменьшаем цену на 20%
  });

  isDiscountApplied = true; // Обновляем флаг
  displayCart(); // Перерисовываем корзину
}

// Добавляем обработчик на кнопку
applyDiscountButton.addEventListener("click", applyDiscount);

// Отображаем корзину при загрузке страницы
displayCart();
