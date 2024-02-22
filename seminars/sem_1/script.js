/**
 * Задание 2 (тайминг 25 минут)
1. Создать параграф, внутри которого будет отображаться текст
“Товаров в корзине 0”
2. Создать кнопку “Купить”, при клике на которую, значение внутри
параграфа будет увеличиваться на 1, при повторном нажатии на эту
кнопку, счетчик не становится больше, добавить 4 таких кнопки
3. При нажатии на кнопку купить, необходимо чтобы текст внутри
кнопки поменялся на “Товар в Корзине”
 */

const app = new Vue({
    el: "#app",
    data: {
        active: true,
        count: 0,
        buttons: [
            { id: 1, text: 'Купить', inCart: false },
            { id: 2, text: 'Купить', inCart: false },
            { id: 3, text: 'Купить', inCart: false },
            { id: 4, text: 'Купить', inCart: false }
        ],
    },
    methods: {
        buyItem(btn) {
            if (btn.inCart === false) {
                this.count++;
                btn.text = 'Товар в корзине';
                btn.inCart = true;
            }

        },
    },

})

/**
 * Задание 3 (тайминг 15 минут)
1. Создать две кнопки “Мне исполнилось 14 лет” и “Мне еще нет 14 лет”
2. Если пользователь нажимает на первую кнопку, то должен
отобразиться текст. “Можете заказать товар”
3. Если пользователь нажимает на вторую кнопку, отображается текст
“Доступ закрыт”
 */

const app_1 = new Vue({
    el: '#app_1',
    data: {
        message: '',
    },
    methods: {
        buyError() {
            this.message = 'Доступ закрыт';
        },
        buySuccess() {
            this.message = 'Можете заказать товар';
        }
    }
});

/**
 * Задание 4 (тайминг 15 минут)
1. Создать кнопку “Показать еще” при клике на которую появляется
контент под кнопкой, при повторном клике, контент необходимо
скрыть
2. Добавить анимацию появления текстового блока
 */

const app_2 = new Vue({
    el: "#app_2",
    data: {
        visible: false,
    },
});


/**
 * Задание 5 (тайминг 15 минут)
1. Создайте кнопку "Генерировать случайное число". При клике на
кнопку должно отображаться случайное число в заданном диапазоне
(например, от 1 до 10).
2. При клике на кнопку, если полученное значение меньше 5,
необходимо вывести на страницу, “Число меньше 5”
3. Если число от 5 до 9, необходимо вывести “Число от 5 до 9”
4. Если число равно 10, необходимо вывести “Число ранов 10”
 */

const app_3 = new Vue({
    el: '#app_3',
    data: {
        result: '',
    },
    methods: {
        randomNumber() {
            const number = Math.floor(Math.random() * 10);
            console.log(number);
            if (number < 5) {
                this.result = 'Число меньше 5'
            } else if (number === 10) {
                this.result = 'Число равно 10';
            } else {
                this.result = 'Число от 5 до 9';
            }
        }
    }
})