/**
 * Часть 2. Задание по Vue

1. Создать кнопку "Перевернуть". При клике на кнопку текст кнопки должен перевернуться и отобразиться в обратном порядке.
2. Есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".
3. *Дополнительное задание: При клике на элемент списка он должен быть удален. (по желанию)
 */

const app = new Vue({
    el: "#app",
    data: {
        text: 'Перевернуть',
    },
    methods: {
        reverseText() {
            const charsArrayReverse = this.text.split('').reverse();
            this.text = charsArrayReverse.join('');
        }
    }
});

const app_2 = new Vue({
    el: '#app_2',

    data: {
        listItems: [
            { id: 1, text: 'Элемент 1' },
            { id: 2, text: 'Элемент 2' },
            { id: 3, text: 'Элемент 3' },
        ],
        count: 3,
    },
    methods: {
        addNewItem() {
            this.count = this.count + 1;
            const newItem = {
                id: this.count,
                text: `Элемент ${this.count}`,
            };
            this.listItems.push(newItem);
        },
    }
});