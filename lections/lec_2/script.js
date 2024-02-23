new Vue({
    el: '#app',
    data: {
        backgroundColor: '#ccc',
        blockWidth: 100,
        firstNum: 0,
        secondNum: 0,
        result: 0,
        modelData: '',
        linkHref: 'product.html',
        imgPhoto: 'photo.jpg',
        styleBlock: {
            backgroundColor: 'red',
            color: 'green',
        }
    },
    methods: {
        send() {
        },
        plus() {
            this.result = this.firstNum + this.secondNum;
        },
    },
    computed: {
        blockStyle() {

            return {
                width: `${this.blockWidth}px`,
                height: `${this.blockWidth}px`,
                backgroundColor: this.backgroundColor,
            }
        },
    },
})