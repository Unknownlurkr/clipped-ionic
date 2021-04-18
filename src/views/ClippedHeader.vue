<template>
    <ion-toolbar>
        <ion-toolbar color="dark">
            <ion-buttons slot="secondary">
                <ion-button href="/home" color="">
                    <ion-icon slot="icon-only" :icon="appsSharp"></ion-icon>
                </ion-button>
                <ion-button href="/tabs" color="success">
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
</template>

<script>

import {
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonSearchbar,
    IonIcon
} from "@ionic/vue";
import {
    ellipsisVertical,
    ellipsisHorizontal,
    homeOutline,
    appsSharp
} from 'ionicons/icons';

import {
    useRouter
} from 'vue-router';

export default {
    name: 'ClippedHeader',
    components: {
        IonToolbar,
        IonButtons,
        IonButton,
        IonTitle,
        IonSearchbar,
        IonIcon
    },
    setup() {
        const router = useRouter();
        const returnHome = async () => {
            router.push("/tabs");
            
        }
        return {
            returnHome,
            router,
            ellipsisVertical,
            ellipsisHorizontal,
            homeOutline,
            appsSharp
        };
    },

}

</script>

<style>

</style>
