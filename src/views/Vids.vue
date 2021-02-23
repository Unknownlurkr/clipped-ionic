<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-toolbar color="dark">
                    <ion-buttons slot="secondary">
                        <ion-button>
                            <ion-icon slot="icon-only" href="/" :icon="personCircle"></ion-icon>
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
                    <ion-title @click="returnHome"  slot="start">Clipped</ion-title>
                    
                
                    
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

                  <!-- <comment></comment> -->

            
            <ion-list>
                <ion-item>
                    <ion-avatar slot="start">
                        <img src="../../public/assets/images/avatars/face1.png">
                    </ion-avatar>
                    <ion-label>
                        <h2>Finn</h2>
                        <h3>I'm a big deal</h3>
                        <p>Listen, I've had a pretty messed up day...</p>
                    </ion-label>
                </ion-item>

                <ion-item>
                    <ion-avatar slot="start">
                        <img src="../../public/assets/images/avatars/Face2.png">
                    </ion-avatar>
                    <ion-label>
                        <h2>V</h2>
                        <h3>Look, kid...</h3>
                        <p>I've got enough on my plate as it is, and I...</p>
                    </ion-label>
                </ion-item>

                <ion-item>
                    <ion-avatar slot="start">
                        <img src="../../public/assets/images/avatars/Face3.png">
                    </ion-avatar>
                    <ion-label>
                        <h2>Arthur</h2>
                        <h3>I can handle myself</h3>
                        <p>I'm gonna count to 3 partner</p>
                    </ion-label>
                </ion-item>
            </ion-list>

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
    IonList

} from '@ionic/vue';

// import 'vuetify/dist/vuetify.min.css'
import {
    ellipsisHorizontal,
    ellipsisVertical,
    helpCircle,
    personCircle,
    search,
    star
} from 'ionicons/icons';

import Comment from "./Comment.vue";
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
        // Comment,
        IonIcon,
        IonButton,
        IonSearchbar,
        IonCardSubtitle,
        IonButtons,
        IonCardHeader,
        IonCardTitle,
        IonList
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
            star
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
