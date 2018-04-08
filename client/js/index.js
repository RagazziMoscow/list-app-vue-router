import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/app.vue';
import List1 from './components/List1.vue';
import List2 from './components/List2.vue';
import List3 from './components/List3.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: '/list1',
        component: List1
    },
    {
        path: '/list2',
        component: List2
    },
    {
        path: '/list3',
        component: List3
    }
];
const router = new VueRouter({
    routes
});


const app = new Vue({
    el: '#root',
    router,
    render (h) {
        return h(App)
    }
});