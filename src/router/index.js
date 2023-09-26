import { createRouter, createWebHashHistory } from "vue-router";
import LandingMain from "@/components/LandingMain.vue";
import LandingMembers from "@/components/LandingMembers.vue";
import LandingRaids from "@/components/LandingRaids.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: LandingMain},
    {path: '/members', component: LandingMembers},
    {path: '/raids', component: LandingRaids},
  ]
})