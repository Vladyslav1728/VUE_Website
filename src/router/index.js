import { createRouter, createWebHashHistory } from "vue-router"
const HomeView = () => import("@/views/HomeView.vue")
const DestinationView = () => import("@/views/DestinationView.vue")
const ExperienceView = () => import("@/views/ExperienceView.vue")
const NotFoundView = () => import("@/views/NotFound.vue")

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/destination/:slug",
            name: "destination",
            component: DestinationView,
            props: true,
            children: [
                {
                    path: ":experienceSlug",
                    name: "experience",
                    component: ExperienceView,
                    props: true
                }
            ]
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notfound",
            component: NotFoundView
        }
    ]
})
export default router