<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons @slot="start">
          <ion-back-button defaultHref="home"></ion-back-button>
        </ion-buttons>
        <ion-title>Create Profile</ion-title>
        <ion-buttons @slot="end">
          <ion-button @click="saveProfileToDatabase">Create</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-item>
        <ion-label>Username</ion-label>
        <ion-input type="text" v-model="formData.Username"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Description</ion-label>
        <ion-input type="text" v-model="formData.description"></ion-input>
      </ion-item>
    </ion-content>
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
  IonLabel,
  IonInput,
  IonBackButton,
  IonButtons,
  IonButton,
} from "@ionic/vue";

import {
  ref
} from "vue";
import {
  useRouter
} from "vue-router";
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
    IonLabel,
    IonInput,
    IonBackButton,
    IonButtons,
    IonButton,
  },
    setup() {
    const router = useRouter();
    const { saveProfile } = dataService();
    
    const formData = ref({
      name: "",
      description: ""
    });
    const saveProfileToDatabase = async () => {
      try {
        const { success, error } = await saveProfile({
          ...formData.value,
         
        });
        console.log(`Profile Created: ${success}`);
        if(error) throw error;
        // router.back();
      } catch (e) {
        console.log(`Error type: ${e.storageType}`);
        alert(e.message);
      }
    };
 
    
    return {
      saveProfileToDatabase,
      formData,

    };
  },
};
</script>

<style scoped>
</style>