<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Supabase.io CRUD Testing</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="addProduct">ADD PRODUCT</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-list>
        <ion-item v-for="p in productList" :key="p.id">
          <div>
            <h2>
              {{ p.name }} <span>${{ p.list_price / 100 }}</span> -
              <span>${{ p.sale_price / 100 || 0 }}</span>
            </h2>
            <h4>"{{ p.description }}" - some fashion reviewer</h4>
            <p>Category: {{ p.category }}</p>
            <p>
              <ion-button color="danger" @click="deleteProduct(p.id)"
                >DELETE</ion-button
              >
            </p>
          </div>
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-footer class="ion-text-center">
      <ion-button @click="doLogout" fill="clear">
        LOGOUT
      </ion-button>
    </ion-footer>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonButtons,
  IonButton,
  IonFooter
} from "@ionic/vue";

import { useRouter } from "vue-router";
import dataService from ".././dataservice.js"

export default {
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonList,
    IonButtons,
    IonButton,
    IonFooter
  },
  ionViewDidEnter() {
    console.log("Home page did enter");
    const { loadProducts } = dataService();
    loadProducts();
  },
  setup() {
    const router = useRouter();
    const {
      displayError,
      productList,
      removeProduct,
      loadProducts,
      logout
    } = dataService();

    /**
     *  go to next page
     */
    const addProduct = () => {
      router.push("/add-product");
    };

    const deleteProduct = async (id) => {
      await removeProduct(id);
      loadProducts();
    };

    const doLogout = async () => {
      await logout();
      router.replace("/login");
    };

    return {
      addProduct,
      productList,
      displayError,
      deleteProduct,
      doLogout
    };
  },
};
</script>

<style scoped>
</style>