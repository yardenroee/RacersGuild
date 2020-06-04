import Vue from "vue";
import Router from "vue-router";
import Home from './components/Home.vue';
Vue.use(Router);

let router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "*",
            redirect: '/'
        },
    ],
});

export default router;
