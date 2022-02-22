import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: "/",
            name: "index",
            component: () => import("@/views/Index.vue"),
            children: [
                {
                    path: 'discover',
                    name: 'discover',
                    component: () => import("@/views/discover/Discover.vue"),
                    meta: {
                        menu: 'discover',
                    }
                }
            ]
        }
    ],
})
export default router;
