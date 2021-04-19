import Vuex from 'vuex';
import { auth } from "./auth.store";
import { home } from "./home.store";
import {cart} from "./modules/cart";
import {product} from "./modules/product";
import { commentModule } from "./modules/comments"

//MUJST USE NATIVE CREATESTORE METHOD OF VUEX OR EVERYTHING BREAKS!
const store = new Vuex.Store({
    modules: {
        a: auth,
        h: home,
        product: product,
        cart: cart,
        comment: commentModule
    },
})

export default store;