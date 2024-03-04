/**
 * 
 * Задание 1 (тайминг 20 минут)
1. Создание простого счетчика: Создайте компонент
счетчика, который имеет кнопку "+" и кнопку "-", и
отображает текущее значение счетчика. При нажатии на
кнопки счетчик должен увеличиваться или уменьшаться
соответственно.
 */


Vue.component('counter', {
    data() {
        return {
            count: 0,
        };
    },
    template: `
    <div class="counter__box">
        <button v-on:click="plus" class="counter__btn_plus">+1</button>
        <p class="counter__result">{{ count }}</p>
        <button v-on:click="minus" class="counter__btn_minus">-1</button>
    </div>
    `,
    methods: {
        plus() {
            this.count++;
        },
        minus() {
            this.count--;
        }
    }
});

new Vue({
    el: "#app3",
    data: {
    },
    methods: {

    }
})

/**
 * Задание 2 (тайминг 30 минут)
1. Создайте компонент списка дел, в котором можно
добавлять и удалять элементы. Каждый элемент списка
должен иметь кнопку удаления, при нажатии на которую
элемент списка будет удаляться.
 */

Vue.component('task-manager', {
    data() {
        return {
            taskText: '',
            taskList: [],
        }
    },
    template: `<div><input type="text" name="taskName" id="task" v-model="taskText"><button v-on:click="addNewTaskToList">Добавить</button><ul><li class="task__item" v-for="(task, index) in taskList" :key="index"><span>{{ task }}</span><button v-on:click="deleteElement(index)">Delete</button></li></ul></div>`,
    methods: {
        addNewTaskToList() {
            if (this.taskText !== '') {
                this.taskList.push(this.taskText);
                this.taskText = '';
            }
        },
        deleteElement(index) {
            this.taskList.splice(index, 1);
        }
    }
});


new Vue({
    el: "#app4",
    data: {
    },
    methods: {
    }
})


/**
 * Задание 3 (тайминг 25 минут)
1. Создайте компонент списка, который отображает массив
элементов. Добавьте текстовое поле для фильтрации
списка. При вводе текста в поле, список должен
автоматически обновляться, отображая только элементы,
содержащие введенный текст.
 */
Vue.component('list-elements', {
    data() {
        return {
            list: ['item 1', 'item 2', 'item 3', 'item 2'],
            filterText: '',
        }
    },
    template: `
    <div>
        <h2>Фильтрация списка</h2>
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="item in  filter":key="item.id">{{ item }}</li>
        </ul>
    </div>
    `,
    computed: {
        filter() {
            return this.list.filter((item) => {
                return item.toLowerCase().includes(this.filterText.toLowerCase());
            });
        },
    },
});

new Vue({
    el: '#app5',
    data: {

    },
    methods: {

    }
});

/**
 *  Задание 4 (тайминг 40 минут)
    Вам необходимо создать компонент "Товар", который будет отображать
    информацию о товаре, включая название, описание и цену. Кроме того, вы
    должны реализовать фильтрацию товаров по цене (по возрастанию и
    убыванию)
    1. Создайте компонент "Товар", который вы создавали в интернет-
    магазине BRAND
    2. Создайте список товаров, используя компонент "Товар". Данные о
    товарах могут быть представлены в виде массива объектов.
    3. Добавьте две кнопки сортировки (по убыванию, по возрастанию)
    4. При нажатии на кнопки, обновите список отображаемых товаров,
    отфильтрованных по цене.
 */

Vue.component('product', {
    props: ['product'],

    data() {
        return {

        }
    },
    template: `
<div>
<img :src="product.image" :alt="product.name" width="100">
<h3>{{ product.name }}</h3>
<p>Цена: {{ product.price }}</p>
</div>
`,
    methods: {
    }
});

new Vue({
    el: '#app6',
    data: {
        products: [{
            id: 1,
            name: 'Товар 1',
            image: 'product1.jpg',
            price: 100
        },
        {
            id: 2,
            name: 'Товар 2',
            image: 'product2.jpg',
            price: 50
        },
        {
            id: 3,
            name: 'Товар 3',
            image: 'product3.jpg',
            price: 200
        },
        ]
    },
    methods: {
        sortByPrice(ascending) {
            if (ascending) {
                this.products.sort((a, b) => a.price - b.price);
            } else {
                this.products.sort((a, b) => b.price - a.price);
            }
        }
    }
});

