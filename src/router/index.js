import Vue from "vue";
import VueRouter from "vue-router";
import PostDetail from '../pages/PostDetail'
import PostListing from '../pages/PostListing.vue'

Vue.use(VueRouter);

const routes = [
  { path: "/", component: PostListing, name: "post-listing" },
  { path: "/post/:slug", component: PostDetail, name: "post-detail" },
  // { path : '*', component: PageNotFound }
];

const router = new VueRouter({
  mode: "history",
  routes, // short for `routes: routes`
});

export default router;
