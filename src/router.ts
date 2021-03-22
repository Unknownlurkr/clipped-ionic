import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '@/views/Tabs.vue';
import AddProduct from "@/views/AddProduct.vue";
import Home  from "@/views/Home.vue";
import UserLogin from "@/views/UserLogin.vue";
import UserCreate from "@/views/UserCreate.vue";
import ChangePassword from "@/views/ChangePassword.vue";
// import { TokenService } from "@/services/token.service";
import  dataService  from "./dataservice.js";

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
      },
      {
        path: 'feed',
        component: () => import('@/views/feed.vue')
      }
    ]
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/add-product",
    name: "AddProduct",
    component: AddProduct,
    meta: { requiresAuth: true} 
  },
  {
    path: "/login",
    component: UserLogin,
    meta: { requiresAuth: false}
  },
  {
    path: "/create-account",
     component: UserCreate,
      meta: { requiresAuth: false} 
  },
  {
    path: "/change-password",
     component: ChangePassword,
      meta: { requiresAuth: false} 
  },

  {
    path: '/vids',
    name: "Videos",
    component: () => import('@/views/Vids.vue')
  },
  {
    path: '/testarea',
    name: "TestArea",
    component: () => import('@/components/TestArea.vue')
  }
  
  // {
  //   path: '/login',
  //   component: SignIn,
  //   meta: {
  //     public: true,
  //     onlyWhenLoggedOut: true
  //   }
  // },
  // {
  //   path: '/signup',
  //   component: SignUp,
  //   meta: {
  //     public: true,
  //     onlyWhenLoggedOut: true
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  console.log("testing beforeEach call");
  
    const { hasUser } = dataService();

    console.log(`Has User:`, hasUser());
    console.log();
    
    

    if(to.meta.requiresAuth && !hasUser()) {
      next("/login");
    } else {
      next();
    }

});

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

export default router;
