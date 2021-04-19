import { createStore } from 'vuex';
import { auth } from "./auth.store";
import { home } from "./home.store";
import {cart} from "./modules/cart";
import {product} from "./modules/product";
import { comment } from "./modules/comments"

//MUJST USE NATIVE CREATESTORE METHOD OF VUEX OR EVERYTHING BREAKS!
export const store = createStore({
    modules: {
        a: auth,
        h: home,
        product: product,
        cart: cart,
        comment: comment
    },
})

