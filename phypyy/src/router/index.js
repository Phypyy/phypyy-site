import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../view/HomeView.vue"
import WorkView from "../view/WorkView.vue"

const routes = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{

            path: "/",
            redirect: '/home',

        }, {
            path: "/home",
            name: "home",
            component: HomeView
        },
        {
            path: "/work",
            name: "work",
            component: WorkView
        }

    ]
})

export default routes