import UserAuth from '@/pages/auth/UserAuth.vue'
import CoachDetail from '@/pages/coaches/CoachDetail.vue'
import CoachesList from '@/pages/coaches/CoachesList.vue'
import CoachRegistration from '@/pages/coaches/CoachRegistration.vue'
import NotFound from '@/pages/NotFound.vue'
import ContactCoach from '@/pages/requests/ContactCoach.vue'
import RequestsReceived from '@/pages/requests/RequestsReceived.vue'
import store from '@/store'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/coaches',
    },
    {
      path: '/coaches',
      component: CoachesList,
    },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        {
          path: 'contact',
          component: ContactCoach,
        },
      ],
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/auth',
      component: UserAuth,
      meta: {
        requiresUnauth: true,
      },
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
})

router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth')
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches')
  } else {
    next()
  }
})

export default router
