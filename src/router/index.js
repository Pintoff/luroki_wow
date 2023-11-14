import { createRouter, createWebHashHistory } from "vue-router";
import LandingMain from "../components/LandingMain.vue";
import LandingMembers from "../components/LandingMembers.vue";
import LandingRaids from "../components/LandingRaids.vue";
import LandingAuth from "../components/LandingAuth.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', name: 'landing', component: LandingMain},
    {path: '/members', name: 'members', component: LandingMembers},
    {path: '/raids', name: 'raids', component: LandingRaids},
    {path: '/login', name: 'login', component: LandingAuth},
  ]
})