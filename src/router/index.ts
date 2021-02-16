import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue';
import SignIn from "../views/Signin.vue";
import SignUp from "../views/Signup.vue";
import { TokenService } from "@/services/token.service";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  },
  {
    path: '/comments',
    component: () => import('@/views/Comment.vue')
  },
  {
    path: '/vids',
    component: () => import('@/views/Vids.vue')
  },
  
  {
    path: '/login',
    component: SignIn,
    meta: {
      public: true,
      onlyWhenLoggedOut: true
    }
  },
  {
    path: '/signup',
    component: SignUp,
    meta: {
      public: true,
      onlyWhenLoggedOut: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//THIS ADDS A CHECK AT TO EACH CALL TO THE ROUTER. COMMENTING OUT BECAUSE OAUTH AUTHENTICATION IS BROKEN AF

// router.beforeEach((to, from, next) => {
//   const isPublic = to.matched.some(record => record.meta.public);
//   const onlyWhenLoggedOut = to.matched.some(
//     record => record.meta.onlyWhenLoggedOut
//   );
//   const loggedIn = !!TokenService.getToken();

//   if(!isPublic && !loggedIn) {
//     return next({
//       path: "/login",
//       query: { redirect: to.fullPath}
//     });
//   }
//   if(loggedIn && onlyWhenLoggedOut) {
//     return next("/tabs/tab1");
//   }
  
//   next();
// });

export default router
