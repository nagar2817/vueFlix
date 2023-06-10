import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Movie from './views/movie.vue'
import FavoriteMovies from './views/fav.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/movie/:id',
      name: "Movie",
      props: true,
      component: Movie
    },
    {
      path: '/favMovie',
      name: 'favMovie',
      component: FavoriteMovies,
      props: true
    },
  ]
})
export default router
