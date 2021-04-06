import { images, triangle, person-outline } from 'ionicons/icons';
<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar @slot="bottom">
        <!-- <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="triangle" />
          <ion-label>Explore</ion-label>
        </ion-tab-button> -->

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="images" />
          <ion-label>Photos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="feed" href="/tabs/feed">
          <ion-icon :icon="colorFilterOutline" />
          <ion-label>Feed</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="personOutline"></ion-icon>
          <ion-label>Profile</ion-label>
        </ion-tab-button>


      </ion-tab-bar>

    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
  import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonIcon,
    IonPage
  } from '@ionic/vue';
  import {
    images,
    triangle,
    colorFilterOutline,
    personOutline
  } from 'ionicons/icons';

  export default {
    name: 'Tabs',
    components: {
      IonLabel,
      IonTabs,
      IonTabBar,
      IonTabButton,
      IonIcon,
      IonPage
    },
    setup() {
      return {
        images,
        triangle,
        colorFilterOutline,
        personOutline
      }
    }
  }
</script>