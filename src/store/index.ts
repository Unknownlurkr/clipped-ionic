import { createStore } from 'vuex';
import { auth } from "./auth.store";
import { home } from "./home.store";
import {cart} from "./modules/cart";
import {product} from "./modules/product";
import { comment } from "./modules/comments"

export const store = createStore({
    modules: {
        a: auth,
        h: home,
        product: product,
        cart: cart,
        comment: comment
    },
})

