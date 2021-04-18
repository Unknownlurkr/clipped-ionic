<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <clipped-header></clipped-header>
        <ion-buttons slot="end">
          <ion-button @click="addProduct"
            ><ion-icon slot="icon-only" :icon="addCircleOutline"></ion-icon
          ></ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-list>
        <ion-item v-for="product in productList" :key="product.id">
          <ion-grid>
            <ion-row>
              <ion-col size="4">
                <ImageView :image="product.image" />
              </ion-col>
              <ion-col>
                <h2>
                  {{ product.name }} <span>${{ product.list_price / 100 }}</span> -
                  <span>${{ product.sale_price / 100 || 0 }}</span>
                </h2>
                <h4>{{ product.description }}</h4>
                <p>{{ product.category }}</p>
                <p>
                  <ion-button color="danger" @click="deleteProduct(product)"
                    >DELETE</ion-button
                  >
                </p>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-footer class="ion-text-center">
      <ion-button @click="doLogout" fill="clear">
        <ion-icon :icon="logOutOutline"></ion-icon>
      </ion-button>
    </ion-footer>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonItem,
  IonList,
  IonButtons,
  IonButton,
  IonFooter,
  IonIcon,
  IonRow,
  IonCol,
  IonGrid
} from "@ionic/vue";
import ImageView from "../components/ImageView.vue";
import { addCircleOutline, logOutOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
import dataService from "../dataservice.js";
import ClippedHeader from './ClippedHeader.vue';
export default {
  name: "Home",
  components: {
    ImageView,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonItem,
    IonList,
    IonButtons,
    IonButton,
    IonFooter,
    IonIcon,
    IonRow,
    IonCol,
    IonGrid,
    ClippedHeader
  },
  ionViewDidEnter() {
    console.log("Entering Home Page. Checking for Active User and Rendering Product List");
    const { loadProducts, hasUser } = dataService();
    hasUser && loadProducts();
  },
  setup() {
    const router = useRouter();
    const {
      displayError,
      productList,
      removeProduct,
      logout
    } = dataService();
    /**
     *  go to next page
     */
    const addProduct = () => {
      router.push("/add-product");
    };
    const deleteProduct = async product => {
      console.log(product.id);
      debugger;
     const {data, error } = await removeProduct(product);
     console.log(data, error);
     debugger;
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
      doLogout,
      // icons
      addCircleOutline,
      logOutOutline
    };
  }
};
</script>

<style scoped>
</style>