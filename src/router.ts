import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '@/views/Tabs.vue';
import AddProduct from "@/views/AddProduct.vue";
import Home  from "@/views/Home.vue";
import UserLogin from "@/views/UserLogin.vue";
import UserCreate from "@/views/UserCreate.vue";
import ChangePassword from "@/views/ChangePassword.vue";
import TestArea from "@/views/TestArea.vue";
import GuestLandingPage from "@/views/GuestLandingPage.vue";
import Welcome from "@/views/Welcome.vue";
// import { TokenService } from "@/services/token.service";
import  dataService  from "./dataservice.js";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/feed',
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/Feed',
      },
      {
        path: 'Photos',
        component: () => import('@/views/Photos.vue')
      },
      {
        path: 'profile',
        component: () => import('@/views/Profile.vue')
      },
      {
        path: 'Feed',
        component: () => import('@/views/Feed.vue'),
        meta: { requiresAuth: false} 
      },
      {
        path: 'Welcome',
        component: Welcome,
        meta: { requiresAuth: true }
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
      meta: { requiresAuth: true} 
  },

  {
    path: '/vids',
    name: "Videos",
    component: () => import('@/views/Vids.vue')
  },
  {
    path: '/testarea',
    name: "TestArea",
    component: TestArea
  },
  {
    path: '/guest-landing',
    name: "GuestLanding",
    component: GuestLandingPage,
    meta: { requiresAuth: false} 
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
    const { hasUser } = dataService();
    console.log(`Has User:`, hasUser());
    console.log(to.fullPath);
    
    //if path we're trying to go to has index of type=recover on the end...
    if (to.fullPath.indexOf("type=recovery") != -1) {
      next("/change-password");
    }
    //  else if (to.meta.requiresAuth && !hasUser()) {
    //   next("/login");
    // } 
    //else if (to.fullPath.includes("/tabs/feed") && !hasUser()) {      
     // next("/tabs/welcome");
    //}
     else {
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
