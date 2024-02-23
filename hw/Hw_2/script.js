new Vue({
    el: "#products",
    data: {
        products: [
            { name: 'Картофель', price: '100' },
            { name: 'Огурцы', price: '300' },
            { name: 'Помидоры', price: '250' },
            { name: 'Капуста', price: '100' },
            { name: 'Кабачки', price: '120' },
            { name: 'Яблоки', price: '205' },
            { name: 'Груши', price: '231' },
            { name: 'Бананы', price: '150' },
            { name: 'Апельсины', price: '350' },
            { name: 'Персики', price: '245' },
            { name: 'Ананас', price: '500' },
            { name: 'Абрикосы', price: '270' },
            { name: 'Сухофрукты', price: '375' },
        ]
    },
    methods: {
        sortByPriceABCS() {
            const sortProductsArray = this.products.sort(function (a, b) {
                if (a.price > b.price) {
                    return 1;
                }
                if (a.price < b.price) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            });
            this.products = sortProductsArray;
        },
        sortByPrice() {
            const sortProductsArray = this.products.sort(function (a, b) {
                if (a.price < b.price) {
                    return 1;
                }
                if (a.price > b.price) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            });
            this.products = sortProductsArray;
        }


    }

});