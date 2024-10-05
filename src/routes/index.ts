import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        name: "NotFoundPage",
        path: "/:pathMatch(.*)*",
        component: () => import("@/view/NotFoundPage.vue"),
        meta: {
            title: "Page not found",
        },
    },
    {
        name: "HomePage",
        path: "/",
        component: () => import("@/view/Home.vue"),
        meta: {
            title: "Home Page",
            requireAuth: true
        },
    },
    {
        name: "LoginPage",
        path: "/login",
        component: () => import("@/view/LoginPage.vue"),
        meta: {
            title: "Login Page",
            requireAuth: true
        },
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


export default router;
