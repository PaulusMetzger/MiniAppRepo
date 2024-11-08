let flippedCards = [];
let matchedCards = [];

function flipCard(card) {
    if (flippedCards.length < 2 && !flippedCards.includes(card) && !matchedCards.includes(card)) {
        card.src = card.dataset.frontImage; // Переворачиваем картинку на переднюю сторону
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000); // Проверяем совпадение картинок после задержки
        }
    }
}

function checkMatch() {
    if (flippedCards[0].dataset.category === flippedCards[1].dataset.category) {
        matchedCards.push(...flippedCards); // Если картинки совпали, добавляем их в массив совпавших карт
        flippedCards = []; // Очищаем массив открытых карт
    } else {
        flippedCards.forEach(flippedCard => {
            flippedCard.src = flippedCard.dataset.image; // Переворачиваем обратно несовпавшие картинки
        });
        flippedCards = []; // Очищаем массив открытых карт
    }
}

function restartGame() {
    location.reload(); // Перезагрузка страницы для начала игры заново
}


// Получаем все элементы с классом "card"
const cards = document.querySelectorAll('.card');

// Случайно перемешиваем элементы "card" в родительском контейнере
const gameGrid = document.querySelector('.game-grid');
for (let i = gameGrid.children.length; i >= 0; i--) {
    gameGrid.appendChild(gameGrid.children[Math.random() * i | 0]);
}