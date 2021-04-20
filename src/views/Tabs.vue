<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar>
        <ion-tab-button v-if="!authGuard" tab="photos" href="/tabs/photos">
          <ion-icon :icon="images" />
          <ion-label>Photos</ion-label>
        </ion-tab-button>
        <ion-tab-button v-if="!authGuard"  tab="feed" href="/tabs/feed">
          <ion-icon :icon="colorFilterOutline" />
          <ion-label>Feed</ion-label>
        </ion-tab-button>
        
        <ion-tab-button v-if="!authGuard" tab="tab3" href="/tabs/Profile">
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
  const {
    hasUser
  } = dataService();
  import {
  ref
} from "vue";
  export default {
    name: 'Tabs',
    ionViewDidEnter() {
      const authGuard = hasUser();
      if (authGuard) alert("Has user? " + authGuard + "\n Setting Tabs to authenticated user view mode");
      if (!authGuard) alert("Has user? " + authGuard + "\n Setting Tabs to guest view mode");
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
      
      const conditionalRenderOptions = ref({
        authGuard: false,
          });
      let { authGuard } = conditionalRenderOptions.value; 
      const conditionalRender = () => {
        
        if(hasUser()) return true;
        else return false;

      }
      authGuard = conditionalRender();
      return {
        authGuard,
        images,
        triangle,
        colorFilterOutline,
        personOutline
      }
    },
    created() {
      
      // if (authGuard) alert("Has user? " + authGuard + "\n Setting Tabs to authenticated view mode");
      // if (!authGuard) alert("Has user? " + authGuard + "\n Setting Tabs to unauthenticated view mode");
    },
    methods: {
      renderTabs() {
        console.log("test");


      }
    },

  }
</script>