<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photo Gallery</ion-title>
        <ion-buttons></ion-buttons>
        <ion-button color="dark" slot="end" href="/vids">Videos</ion-button>
        <ion-button slot="end" @click="openSignInModal">Modal</ion-button>
        <ion-button slot="end" color="favorite" href="/login">Sign In</ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="6" :key="photo" v-for="photo in photos">
            <ion-img :src="photo.webviewPath"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-fab vertical="bottom" horizontal="center" slot:="fixed">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import {
  usePhotoGallery
} from '@/composables/usePhotoGallery';
import {
  camera,
  trash,
  close
} from 'ionicons/icons';
import {
  IonPage,
  IonHeader,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonContent,
  modalController
} from '@ionic/vue';
import Modal from './modal.vue'

export default {
  name: 'Photos',
  components: {
    IonPage,
    IonHeader,
    IonFab,
    IonFabButton,
    IonIcon,
    IonToolbar,
    IonTitle,
    
    IonContent
  },

  setup() {
    const {
      photos,
      takePhoto
    } = usePhotoGallery();

    return {
      photos,
      takePhoto,
      camera,
      trash,
      close
    };
  },
  methods: {
    async openSignInModal() {
      const modal = await modalController
        .create({
          component: Modal,
          cssClass: 'my-custom-class',
          componentProps: {
            title: "New Title"
          },
        })
      return modal.present();
    }
  },

}
</script>

<style lang="sass" scoped>


</style>
