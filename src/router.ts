import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './pages/Home.vue'
import AboutView from './pages/About.vue'
import LinksView from './pages/Links.vue'
import BlogView from './pages/Blog.vue'
import BlogPostView from './pages/BlogPost.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/links', component: LinksView },
  { path: '/blog', component: BlogView },
  { name: "BlogPost", path: '/blog/blog-post/:id', component: BlogPostView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})