import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MovieView from '@/views/MovieView.vue'
import TimeTableView from '@/views/TimeTableView.vue'
import PromotionView from '@/views/PromotionView.vue'
import TicketView from '@/views/TicketView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import MovieItemView from '@/views/MovieItemView.vue'
import CinemaTimeTableView from '@/views/CinemaTimeTableView.vue'
import PromotionItemView from '@/views/PromotionItemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/movie',
      name: 'movie',
      component: MovieView,
    },
    {
      path:'/movie/:id',
      name:'movieItem',
      component:MovieItemView,
    },
    {
      path: '/timeTable',
      name: 'timeTable',
      component: TimeTableView,
    },
    {
      path:'/timeTable/:id',
      name:'timeTableCinema',
      component:CinemaTimeTableView,
    },
    {
      path: '/promotion',
      name: 'promotion',
      component: PromotionView,
    },
    {
      path: '/promotion/:id',
      name:'promotionItem',
      component:PromotionItemView,
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: TicketView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
})

export default router
