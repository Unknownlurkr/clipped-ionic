<template>
    <ion-page>
        <ion-header>
            <clipped-header></clipped-header>
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
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
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
import ClippedHeader from './ClippedHeader.vue';



export default {
    name: 'Vids',
    components: {
        IonPage,
        IonHeader,
        IonContent,
        IonCard,
        StaticListEx,
        //Comment,
        IonCardSubtitle,
        IonCardHeader,
        IonCardTitle,
        IonGrid,
        IonRow,
        IonCol,
        ClippedHeader
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
