import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: "/",
            name: "index",
            component: () => import("@/views/Index.vue"),
            redirect: {name: 'discover'},
            children: [
                {
                    path: 'discover',
                    name: 'discover',
                    component: () => import("@/views/discover/Discover.vue"),
                    meta: {
                        menu: 'discover',
                    }
                },
                {
                    path: 'music',
                    name: 'music',
                    component: () => import("@/views/music/Music.vue"),
                    redirect: {name: 'picked'},
                    children: [
                        {
                            path: 'picked',
                            name: 'picked',
                            component: () => import("@/views/music/picked/Picked.vue"),
                            meta: {
                                menu: 'music',
                            }
                        },
                        {
                            path: 'toplist',
                            name: 'toplist',
                            component: () => import("@/views/music/toplist/TopList.vue"),
                            meta: {
                                menu: 'music',
                            }
                        }
                    ]
                },
                {
                    path: 'playlist',
                    name: 'playlist',
                    component: () => import('@/views/playlist/PlayList.vue'),
                }
            ]
        }
    ],
})
export default router;
