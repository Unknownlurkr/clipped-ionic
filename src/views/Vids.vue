<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-toolbar color="dark">
                    <ion-buttons slot="secondary">
                        <ion-button href="/tabs" color="">
                            <ion-icon slot="icon-only" :icon="appsSharp"></ion-icon>
                        </ion-button>
                        <ion-button href="/home" color="success">
                            <ion-icon slot="icon-only" :icon="homeOutline"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                    <ion-buttons slot="primary">
                        <ion-button href="/testArea" color="danger">
                            <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                    <ion-title @click="returnHome" slot="start">Clipped</ion-title>
                    <ion-searchbar slot="primary" show-cancel-button="focus" cancel-button-text="Custom Cancel"
                        id="header-search-vids">
                    </ion-searchbar>
                </ion-toolbar>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-grid>
                <ion-row>
                    <ion-col size="8">
                        <ion-card class="ion-activated" id="vid-detail">
                            <ion-card-header>
                                <ion-card-subtitle>Clipped</ion-card-subtitle>
                                <ion-card-title>Epic Video, yeah!</ion-card-title>
                            </ion-card-header>
                        </ion-card>
                    </ion-col>
                    <ion-col>
                        <static-list-ex></static-list-ex>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <!-- <comment></comment> -->
                </ion-row>
            </ion-grid>
            

        </ion-content>
        </ion-page>
        </template>

<script lang="ts">

import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonIcon,
    IonButton,
    IonButtons,
    IonCardHeader,
    IonCardTitle,
    IonSearchbar,
    IonCardSubtitle,
    IonGrid,
    IonRow,
    IonCol

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



export default {
    name: 'Vids',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonCard,
        StaticListEx,
        //Comment,
        IonIcon,
        IonButton,
        IonSearchbar,
        IonCardSubtitle,
        IonButtons,
        IonCardHeader,
        IonCardTitle,
        IonGrid,
        IonRow,
        IonCol
    },
    setup() {
        const router = useRouter();
        return {
            router,
            ellipsisHorizontal,
            ellipsisVertical,
            helpCircle,
            personCircle,
            search,
            star,
            homeOutline,
            appsSharp
        };
    },
    methods: {
        returnHome() {
            console.log("fuck");

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
    float: right;
}

#vid-detail {
    background-color: rgba(109, 36, 36, 0.767);
    left: 0;
    right: 0;
    top: 50%;
    width: 100%; 
    height: 700px;
    transform: translateY(-50%);
}
</style>
