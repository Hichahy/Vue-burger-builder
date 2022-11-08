import { createRouter, createWebHistory } from "vue-router";
import BurgerPresentation from "../components/burgerPresentation/BurgerPresentation.vue";
import HomePage from "../components/homePage/HomePage.vue";
import NotFoundRouter from "../components/notFoundRouter/NotFoundRouter.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/burger-creator",
    name: "BurgerPresentation",
    component: BurgerPresentation,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundRouter,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0, behavior: "smooth" };
  },
});
export default router;
