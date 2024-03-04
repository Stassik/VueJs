// Vue.components('artciles__list', {
//     data() {
//         return {
//             filter: 'Kitchan',
//             articles: [
//                 {
//                     title: 'Let’s Get Solution For Building Construction Work',
//                     category: 'Kitchan Design',
//                     date: '26 December,2022',
//                     src: './images/2_1.jpg'
//                 },
//                 {
//                     title: 'Low Cost Latest Invented Interior Designing Ideas. Work',
//                     category: 'Living Design',
//                     date: '22 December,2022',
//                     src: './images/2_2.jpg'
//                 },
//                 {
//                     title: 'Best For Any Office & Business Interior Solution',
//                     category: 'Interior Design',
//                     date: '25 December,2022',
//                     src: './images/2_3.jpg'
//                 },
//                 {
//                     title: 'Let’s Get Solution For Building Construction Work',
//                     category: 'Kitchan Design',
//                     date: '26 December,2022',
//                     src: './images/2_4.jpg'
//                 },
//                 {
//                     title: 'Low Cost Latest Invented Interior Designing Ideas. Work',
//                     category: 'Living Design',
//                     date: '22 December,2022',
//                     src: './images/2_5.jpg'
//                 },
//                 {
//                     title: 'Best For Any Office & Business Interior Solution',
//                     category: 'Interior Design',
//                     date: '25 December,2022',
//                     src: './images/2_6.jpg'
//                 },
//             ]
//         }
//     }

// });


const articles = new Vue({
    el: '#articles',
    data: {
        articles: [
            {
                title: 'Let’s Get Solution For Building Construction Work',
                category: 'Kitchan Design',
                date: '26 December,2022',
                src: './images/2_1.jpg'
            },
            {
                title: 'Low Cost Latest Invented Interior Designing Ideas. Work',
                category: 'Living Design',
                date: '22 December,2022',
                src: './images/2_2.jpg'
            },
            {
                title: 'Best For Any Office & Business Interior Solution',
                category: 'Interior Design',
                date: '25 December,2022',
                src: './images/2_3.jpg'
            },
            {
                title: 'Let’s Get Solution For Building Construction Work',
                category: 'Kitchan Design',
                date: '26 December,2022',
                src: './images/2_4.jpg'
            },
            {
                title: 'Low Cost Latest Invented Interior Designing Ideas. Work',
                category: 'Living Design',
                date: '22 December,2022',
                src: './images/2_5.jpg'
            },
            {
                title: 'Best For Any Office & Business Interior Solution',
                category: 'Interior Design',
                date: '25 December,2022',
                src: './images/2_6.jpg'
            },

        ],
        newList: [],
        active: false,
    },
    methods: {

    }
});



Vue.component('tabs', {
    data() {
        return {
            tabs: [
                { name: 'Kitchan' },
                { name: 'Bedroom' },
                { name: 'Interior' },
                { name: 'Living' },
            ]
        }

    },
    template: `
        <ul class="tags__list list">
            <li  @click="sortByTag(index, $event)" class="tags__item" v-for="(tab, index) in tabs" :key="index">{{ tab.name }}</li>
        </ul>
    `,
    methods: {
        sortByTag(index, event) {
            if (event.target.classList.contains('active')) {
                event.target.classList.remove('active');
            } else {
                event.target.classList.add('active');
            }
            const filtredArticlesList = [];
            articles.articles.forEach(article => {
                if (article.category.includes(this.tabs[index].name)) {
                    filtredArticlesList.push(article);
                }
            });

            articles.newList = filtredArticlesList;

        }
    }
});

const tabsFilter = new Vue({
    el: '#filterTabs',
    data: {

    },
    methods: {

    }

})
