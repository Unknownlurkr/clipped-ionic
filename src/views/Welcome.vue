<template>
  <ion-page>
    <ion-header>
      <clipped-header></clipped-header>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Explore other content</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-title>{{msg}}</ion-title>
      <ExploreContainer name="Welcome to Clipped!" url="/login" />
    </ion-content>
  </ion-page>
</template>

<style lang="css">

</style>

<script lang="ts">

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import { warning } from 'ionicons/icons';
import { logOut } from 'ionicons/icons';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { useRouter } from 'vue-router';
import ClippedHeader from './ClippedHeader.vue';

export default  {
  name: 'Welcome',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, ClippedHeader},
  data() {
    return {
      msg: "Injecting data on load, nice!"
    }
  },
  setup() {
    const router = useRouter();
    return {
      router,
      logOut,
      warning
    };
  },
}
</script>