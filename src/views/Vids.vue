<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-toolbar color="dark">
                    <ion-buttons slot="secondary">
                        <ion-button>
                            <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
                        </ion-button>
                        <ion-button>
                            <ion-icon slot="icon-only" :icon="search"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                    <ion-buttons slot="primary">
                        <ion-button color="danger">
                            <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                    <ion-title slot="start">Clipped</ion-title>
                    <ion-searchbar slot="primary" show-cancel-button="focus" cancel-button-text="Custom Cancel"
                        id="header-search-vids">
                    </ion-searchbar>
                </ion-toolbar>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

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

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { 
  ellipsisHorizontal,
  ellipsisVertical, 
  helpCircle, 
  personCircle, 
  search, 
  star
} from 'ionicons/icons';

export default {
    name: 'Vids',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent
    },
      setup() {
    return {
      ellipsisHorizontal,
      ellipsisVertical, 
      helpCircle, 
      personCircle, 
      search, 
      star
    }
  }
}

</script>

<style scoped>

ion-content{

    --ion-background-color:#111D12;
    
}

#header-search-vids {
    width: 90%;
    left: 0;
    right: 0;
    float: right;

}

#vid-detail {
    background-color: rgba(109, 36, 36, 0.767);
      left: 0;
  right: 0;
  top: 50%;
  width: 60%;
  height: 75%;
  transform: translateY(-50%);

}

</style>
