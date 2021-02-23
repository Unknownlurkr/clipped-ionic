<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Explore Page</ion-title>
        <ion-buttons @slot="primary">
          <ion-button color="secondary" @click="handleSignOut">
            <ion-icon @slot="icon-only" :icon="logOut"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header> 
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Explore other content</ion-title>
        </ion-toolbar>
      </ion-header>
<ion-card class="ion-activated" id="explore-vid">
  
                <ion-card-header>
                    <ion-card-subtitle>Clippe Creator</ion-card-subtitle>
                    <ion-card-title>Epic Video, yeah!</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  When you make a meme to make a meme
                </ion-card-content>
                    <ion-card>
                            <ion-item>
                              <ion-icon :icon="pin" slot="start"></ion-icon>
                               
                              <ion-label></ion-label>
                            </ion-item>
                    </ion-card>


            </ion-card>
      <ion-title>{{msg}}</ion-title>
      <ExploreContainer name="Explore" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButtons, IonButton,IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonAvatar,  } from '@ionic/vue';
import { warning } from 'ionicons/icons';
import { logOut } from 'ionicons/icons';
import ExploreContainer from '@/components/ExploreContainer.vue';
import {mapActions} from "vuex";
import { useRouter } from 'vue-router';

export default  {
  name: 'Tab1',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon, IonButtons, IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonItem, IonLabel },
  data() {
    return {
      msg: "Explore other content!"
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
  methods: {
    ...mapActions("auth", ["signOut"]),
    ...mapActions("home", ["loadSecretArea"]),
    async handleSignOut() {
      await this.signOut().then(() => {
        this.router.push("/login");
      });
    },
    async loadHomeData() {
      await this.loadSecretArea().then((res: any) => {
        this.msg = res.data;
      });
    },
    ionViewWillEnter() {
      this.loadHomeData();
    }
  }
}
</script>