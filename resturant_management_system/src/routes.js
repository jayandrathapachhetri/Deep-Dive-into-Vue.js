import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import LogIn from './components/LogIn.vue';
import AddPage from './components/AddPage.vue';
import UpdatePage from './components/UpdatePage.vue';

const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LogIn",
    component: LogIn,
    path: "/login",
  },
  {
    name: "AddPage",
    component: AddPage,
    path: "/add",
  },
  {
    name: "UpdatePage",
    component: UpdatePage,
    path: "/update/:id",
  },
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router