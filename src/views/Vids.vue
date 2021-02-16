<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
            <ion-title>Videos</ion-title>
            <ion-searchbar show-cancel-button="focus" cancel-button-text="Custom Cancel" id="header-search-vids"></ion-searchbar>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen ="true">
        <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-card class="ion-activated" id="vid-detail">
        <ion-card-header>
            <ion-card-subtitle>Clipped</ion-card-subtitle>
            <ion-card-title>Epic Video, yeah!</ion-card-title>
       
        </ion-card-header>

    </ion-card>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonButton } from '@ionic/vue';

export default {
    name: 'Vids',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent
    },
}

</script>

<style scoped>

ion-content{

    --ion-background-color:#111D12;
    
}

#header-search-vids {
    width: 75%;
    left: 0;
    right: 0;
    float: right;

}

#vid-detail {
    background-color: red;
      left: 0;
  right: 0;
  top: 50%;
  width: 60%;
  height: 75%;
  transform: translateY(-50%);

}

</style>
