<template>
    <ion-header>
            <clipped-header></clipped-header>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-grid>
                <ion-row>
                    <ion-col size="8">
                        <ion-card class="ion-activated" id="vid-detail">
                            <ion-card-header>
                                <ion-card-subtitle>New video YAS</ion-card-subtitle>
                                <ion-card-title>Epic Video, yeah!</ion-card-title>
                            </ion-card-header>
                            <video-view></video-view>
                        </ion-card>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <!-- <comment></comment> -->
                </ion-row>
            </ion-grid>
        </ion-content>
</template>


<style lang="css">

</style>

<script lang="ts">
import {
    IonPage,
    IonHeader,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonGrid,
    IonRow,
    IonCol,
    modalController,
    IonButton

} from '@ionic/vue';

// import 'vuetify/dist/vuetify.min.css'
import {
    
    ellipsisHorizontal,
    ellipsisVertical,
    helpCircle,
    personCircle,
    search,
    star,
    homeOutline,
    appsSharp
} from 'ionicons/icons';


import Comment from "../components/comment/Comment.vue";
import StaticListEx from "../components/StaticListEx.vue";

import {

    useRouter
} from 'vue-router';
import ClippedHeader from './ClippedHeader.vue';
import VideoView from '@/components/VideoView.vue';
import Modal from './modal.vue'


export default {
    name: 'Vids',
    components: {
        //IonPage,
        IonHeader,
        IonContent,
        IonCard,
        //StaticListEx,
        //Comment,
        IonCardSubtitle,
        IonCardHeader,
        IonCardTitle,
        IonGrid,
        IonRow,
        IonCol,
        ClippedHeader,
        VideoView,   
        //IonButton
    },
    setup() {
        const router = useRouter();
        return {
            router,
            ellipsisVertical,
            helpCircle,
            personCircle,
            search,
            star,
        };
    },
    methods: {
        returnHome() {
            console.log("go home");
            
            
        },
 async openSignInModal() {
      const modal = await modalController
        .create({
          component: Modal,
          cssClass: 'my-custom-class',
          componentProps: {
            title: "Enter a comment"
          },
        })
      return modal.present();
    }
    }
}
</script>