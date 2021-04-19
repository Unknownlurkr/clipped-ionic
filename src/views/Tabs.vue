<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar>
        <ion-tab-button tab="photos" href="/tabs/photos">
          <ion-icon :icon="images" />
          <ion-label>Photos</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="feed" href="/tabs/feed">
          <ion-icon :icon="colorFilterOutline" />
          <ion-label>Feed</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/Profile">
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

import dataService from '../dataservice';
  const { hasUser } = dataService()
  export default {
    name: 'Tabs',
      ionViewDidEnter() {
        alert("Has user? " + hasUser());
      },
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
    },
        methods: {
          renderTabs() {
            console.log("test");
            
          }
        }
  }
</script>